import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface StudentsItem {
  id: number;
  Name: string;
  Gender: string;
  TotalDays: number;
  TotalPresent: number;
  TotalAbsent: number;
  TotalHolidays: number;
  TotalNotAvailable: number;
}

let json={
  "10A": {
    "Students": {
        "1": {
            "Attendance": {
                "01/01/2018": "P",
                "02/01/2018": "N",
                "03/01/2018": "P",
                "04/01/2018": "P",
                "05/01/2018": "P",
                "06/01/2018": "A",
                "07/01/2018": "P",
                "08/01/2018": "P",
                "09/01/2018": "N",
                "10/01/2018": "N",
                "11/01/2018": "P",
                "12/01/2018": "H",
                "13/01/2018": "P",
                "14/01/2018": "N",
                "15/01/2018": "P",
                "16/01/2018": "P",
                "17/01/2018": "P",
                "18/01/2018": "A",
                "19/01/2018": "P",
                "20/01/2018": "P",
                "21/01/2018": "N",
                "22/01/2018": "N",
                "23/01/2018": "P",
                "24/01/2018": "H"
            },
            "Gender": "M",
            "Name": "Aman Tiwari",
            "TotalAbsent": "2",
            "TotalDays": "20",
            "TotalNotAvailable": "4",
            "TotalHolidays": "1",
            "TotalPresent": "12"
        },
        "2": {
            "Attendance": {
                "01/01/2018": "P",
                "02/01/2018": "N",
                "03/01/2018": "P",
                "04/01/2018": "P",
                "05/01/2018": "P",
                "06/01/2018": "A",
                "07/01/2018": "P",
                "08/01/2018": "P",
                "09/01/2018": "N",
                "10/01/2018": "N",
                "11/01/2018": "P",
                "12/01/2018": "H",
                "13/01/2018": "P",
                "14/01/2018": "N",
                "15/01/2018": "P",
                "16/01/2018": "P",
                "17/01/2018": "P",
                "18/01/2018": "A",
                "19/01/2018": "P",
                "20/01/2018": "P",
                "21/01/2018": "N",
                "22/01/2018": "N",
                "23/01/2018": "P",
                "24/01/2018": "H"
            },
            "Gender": "M",
            "Name": "Abhinav Yadav",
            "TotalAbsent": "2",
            "TotalDays": "24",
            "TotalNotAvailable": "6",
            "TotalHolidays": "2",
            "TotalPresent": "14"
        },
        "3": {
            "Attendance": {
                "01/01/2018": "P",
                "02/01/2018": "N",
                "03/01/2018": "P",
                "04/01/2018": "P",
                "05/01/2018": "P",
                "06/01/2018": "A",
                "07/01/2018": "P",
                "08/01/2018": "P",
                "09/01/2018": "N",
                "10/01/2018": "N",
                "11/01/2018": "P",
                "12/01/2018": "H",
                "13/01/2018": "P",
                "14/01/2018": "N",
                "15/01/2018": "P",
                "16/01/2018": "P",
                "17/01/2018": "P",
                "18/01/2018": "A",
                "19/01/2018": "P",
                "20/01/2018": "P",
                "21/01/2018": "N",
                "22/01/2018": "N",
                "23/01/2018": "P",
                "24/01/2018": "H"
            },
            "Gender": "M",
            "Name": "Krishna Agarwal",
            "TotalAbsent": "2",
            "TotalDays": "24",
            "TotalNotAvailable": "6",
            "TotalHolidays": "2",
            "TotalPresent": "14"
        },
        "4": {
            "Attendance": {
                "01/01/2018": "P",
                "02/01/2018": "N",
                "03/01/2018": "P",
                "04/01/2018": "P",
                "05/01/2018": "P",
                "06/01/2018": "A",
                "07/01/2018": "P",
                "08/01/2018": "P",
                "09/01/2018": "N",
                "10/01/2018": "N",
                "11/01/2018": "P",
                "12/01/2018": "H",
                "13/01/2018": "P",
                "14/01/2018": "N",
                "15/01/2018": "P",
                "16/01/2018": "P",
                "17/01/2018": "P",
                "18/01/2018": "A",
                "19/01/2018": "P",
                "20/01/2018": "P",
                "21/01/2018": "N",
                "22/01/2018": "N",
                "23/01/2018": "P",
                "24/01/2018": "H"
            },
            "Gender": "M",
            "Name": "Krishna Agarwal",
            "TotalAbsent": "2",
            "TotalDays": "24",
            "TotalNotAvailable": "6",
            "TotalHolidays": "2",
            "TotalPresent": "14"
        },
        "5": {
            "Attendance": {
                "01/01/2018": "P",
                "02/01/2018": "N",
                "03/01/2018": "P",
                "04/01/2018": "P",
                "05/01/2018": "P",
                "06/01/2018": "A",
                "07/01/2018": "P",
                "08/01/2018": "P",
                "09/01/2018": "N",
                "10/01/2018": "N",
                "11/01/2018": "P",
                "12/01/2018": "H",
                "13/01/2018": "P",
                "14/01/2018": "N",
                "15/01/2018": "P",
                "16/01/2018": "P",
                "17/01/2018": "P",
                "18/01/2018": "A",
                "19/01/2018": "P",
                "20/01/2018": "P",
                "21/01/2018": "N",
                "22/01/2018": "N",
                "23/01/2018": "P",
                "24/01/2018": "H"
            },
            "Gender": "M",
            "Name": "Abhinav Yadav",
            "TotalAbsent": "2",
            "TotalDays": "24",
            "TotalNotAvailable": "6",
            "TotalHolidays": "2",
            "TotalPresent": "14"
        },
        "6": {
            "Attendance": {
                "01/01/2018": "P",
                "02/01/2018": "N",
                "03/01/2018": "P",
                "04/01/2018": "P",
                "05/01/2018": "P",
                "06/01/2018": "A",
                "07/01/2018": "P",
                "08/01/2018": "P",
                "09/01/2018": "N",
                "10/01/2018": "N",
                "11/01/2018": "P",
                "12/01/2018": "H",
                "13/01/2018": "P",
                "14/01/2018": "N",
                "15/01/2018": "P",
                "16/01/2018": "P",
                "17/01/2018": "P",
                "18/01/2018": "A",
                "19/01/2018": "P",
                "20/01/2018": "P",
                "21/01/2018": "N",
                "22/01/2018": "N",
                "23/01/2018": "P",
                "24/01/2018": "H"
            },
            "Gender": "M",
            "Name": "Krishna Agarwal",
            "TotalAbsent": "2",
            "TotalDays": "24",
            "TotalNotAvailable": "6",
            "TotalHolidays": "2",
            "TotalPresent": "14"
        }
    },
    "StudentsInClass": "3"
}
}
// TODO: replace this with real data from your application
let students=[]
for (var each in json["10A"]["Students"]){
  let eachStudent={};
  eachStudent["id"]=each;
  for(var key in json["10A"]["Students"][each]){
    eachStudent[key]=json["10A"]["Students"][each][key];
  }
  students.push(eachStudent);
}
// console.log(students);
const EXAMPLE_DATA: StudentsItem[] = students;

/**
 * Data source for the Students view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class StudentsDataSource extends DataSource<StudentsItem> {
  data: StudentsItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<StudentsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: StudentsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: StudentsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Name': return compare(a.Name, b.Name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
