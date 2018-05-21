import { Observable } from 'data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

export class MainViewModel extends Observable {
    private arr = new ObservableArray(
        [
            {
                title: 'Test1'
            },
            {
                title: 'Test2'
            },
            {
                title: 'Test3'
            },
            {
                title: 'Test4'
            },
            {
                title: 'Test5'
            },
            {
                title: 'Test6'
            },
            {
                title: 'Test7'
            },
            {
                title: 'Test8'
            },
            {
                title: 'Test9'
            },
            {
                title: 'Test10'
            },
            {
                title: 'Test11'
            }
        ]
    );

    constructor() {
        super();
    }

    get colorItems() {
        return this.arr;
    }
}