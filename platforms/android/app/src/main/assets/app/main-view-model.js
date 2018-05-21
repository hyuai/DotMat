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
            },
            {
                title: 'Test12'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDRGQUEwRjtBQUUxRjtJQUFtQyxpQ0FBVTtJQTBDekM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUEzQ08sU0FBRyxHQUFHLElBQUksa0NBQWUsQ0FDN0I7WUFDSTtnQkFDSSxLQUFLLEVBQUUsT0FBTzthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLE9BQU87YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsT0FBTzthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLE9BQU87YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsT0FBTzthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLE9BQU87YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsUUFBUTthQUNsQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUNKLENBQUM7O0lBSUYsQ0FBQztJQUVELHNCQUFJLHFDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWpERCxDQUFtQyx1QkFBVSxHQWlENUM7QUFqRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgYXJyID0gbmV3IE9ic2VydmFibGVBcnJheShcbiAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdDEwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3QxMSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUZXN0MTInXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICApO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbG9ySXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycjtcbiAgICB9XG59Il19