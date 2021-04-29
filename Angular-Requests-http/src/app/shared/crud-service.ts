import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';


export class CrudService<T extends { id?: number }> {

    constructor(protected http: HttpClient, private API_URL: string) {

    }

    list() {
        return this.http.get<T[]>(this.API_URL)
            .pipe(
                delay(3000),
                tap(console.log)
            );
    }

    loadById(id: string) {
        //return this.http.get(`${this.API}/${id}`).pipe(take(1))
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
    }

    private create(record: T) {
        return this.http.post(this.API_URL, record).pipe(take(1));
    }

    private update(record: T) {
        return this.http.put(`${this.API_URL}/${record}`, record).pipe(take(1));
    }

    save(record: T) {

        if (record?.id) {
            return this.update(record);
        }
        return this.create(record);
    }

    delete(record: T) {
        return this.http.delete(`${this.API_URL}/${record.id}`).pipe(take(1));
    }
}