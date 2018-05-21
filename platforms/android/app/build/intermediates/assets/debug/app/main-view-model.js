"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var MainViewModel = /** @class */ (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this.arr = new observable_array_1.ObservableArray([
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
        ]);
        return _this;
    }
    Object.defineProperty(MainViewModel.prototype, "colorItems", {
        get: function () {
            return this.arr;
        },
        enumerable: true,
        configurable: true
    });
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDRGQUEwRjtBQUUxRjtJQUFtQyxpQ0FBVTtJQXVDekM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUF4Q08sU0FBRyxHQUFHLElBQUksa0NBQWUsQ0FDN0I7WUFDSTtnQkFDSSxLQUFLLEVBQUUsT0FBTzthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLE9BQU87YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsT0FBTzthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLE9BQU87YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsT0FBTzthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLE9BQU87YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsUUFBUTthQUNsQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FDSixDQUFDOztJQUlGLENBQUM7SUFFRCxzQkFBSSxxQ0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDTCxvQkFBQztBQUFELENBQUMsQUE5Q0QsQ0FBbUMsdUJBQVUsR0E4QzVDO0FBOUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcblxuZXhwb3J0IGNsYXNzIE1haW5WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIGFyciA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoXG4gICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3QxJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3QyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3QzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3Q0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3Q1J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3Q2J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3Q3J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3Q4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3Q5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3QxMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUZXN0MTEnXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICApO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbG9ySXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycjtcbiAgICB9XG59Il19