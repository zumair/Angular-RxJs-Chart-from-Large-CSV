import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { groupBy, map } from 'rxjs/operators';

export class DateWithUV {
  dateValue: string;
  uvValue: number;
  constructor(dateValue: string, uvValue: number) {
    this.dateValue = dateValue;
    this.uvValue = uvValue;
  }
}

export type GroupByDateAndCalculateSumAndAvgType = {
  [key: string]: { uvSum: number; count: number; uvAvg: number };
};


export interface JsonChartModelType {
  dateTimeValue: Date;
  latitude: number;
  longitude: number;
  uvIndexValue: number;
}
export class JsonChartModel implements JsonChartModelType {
  dateTimeValue: Date;
  latitude: number;
  longitude: number;
  uvIndexValue: number;
  constructor(
    dateTimeValue: Date,
    latitude: number,
    longitude: number,
    uvIndexValue: number
  ) {
    this.dateTimeValue = dateTimeValue;
    this.latitude = latitude;
    this.longitude = longitude;
    this.uvIndexValue = uvIndexValue;
  }
}

const csvFilePath = 'assets/data/cbr-uv-2020.csv';
@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private http: HttpClient) {}

  public readFile(): Observable<JsonChartModelType[]> {
    return this.http.get(csvFilePath, { responseType: 'text' }).pipe(
      map((data: string) => {
        return data.split('\n').slice(1);
      }),
      map((lines: string[]) => {
        return lines.map((line: string) => {
          let row = line.split(',');
          return new JsonChartModel(
            new Date(row[0]),
            Number(row[1]),
            Number(row[2]),
            Number(row[3])
          );
        });
      })
    );
  }
  
  public getGroupedByDateAndCalculateSumAndAvgData(): Observable<GroupByDateAndCalculateSumAndAvgType> {
    return this.readFile().pipe(
      map((recordArray: JsonChartModelType[]) => {
        return recordArray.map((x) => {
          return new DateWithUV(
            x.dateTimeValue.toLocaleDateString(),
            x.uvIndexValue
          );
        });
      }),
      map((x: DateWithUV[]) => {
        return this.groupByKeyAndCalculateSumAndAvg(x);
      })
    );
  }

  private groupByKeyAndCalculateSumAndAvg(arrayForUVValueAverage: DateWithUV[]) {
    return arrayForUVValueAverage.reduce(
      (
        acc: { [key: string]: { uvSum: number; count: number; uvAvg: number } },
        item
      ) => {
        if (acc[item.dateValue] == null) {
          acc[item.dateValue] = {
            uvSum: item.uvValue,
            count: 1,
            uvAvg: item.uvValue,
          };
          return acc;
        }
        acc[item.dateValue] = {
          uvSum: acc[item.dateValue].uvSum + item.uvValue,
          count: acc[item.dateValue].count + 1,
          uvAvg:
            (acc[item.dateValue].uvSum + item.uvValue) /
            (acc[item.dateValue].count + 1),
        };
        return acc;
      },
      {}
    );
  }
}
