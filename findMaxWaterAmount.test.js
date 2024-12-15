const maxArea = require('./findMaxWaterAmout.js');

describe('maxArea', () => {
    test('should return 49 for input [1, 8, 6, 2, 5, 4, 8, 3, 7]', () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        expect(maxArea(height)).toBe(49);
    });

    test('should return 1 for input [1, 1]', () => {
        const height = [1, 1];
        expect(maxArea(height)).toBe(1);
    });

    test('should handle the case when height[left] == height[right]', () => {
        const height = [3, 3, 3, 3];
        // Expected: width = 3 (from index 0 to 3), height = 3 => area = 3 * 3 = 9
        expect(maxArea(height)).toBe(9);
    });

    test('should through error when the input array lenght is smaller than 2', () => {
        const height = [1];
        expect(() => maxArea(height)).toThrow(
            "The length of the height array must be between 2 and 100000."
        );
    });

    test('should through error when the input array lenght is greater than 100000', () => {
        const height = Array(100002).fill(10002); // All heights are the same
        expect(() => maxArea(height)).toThrow(
            "The length of the height array must be between 2 and 100000."
        );
    });

    test('should throw an error if an element is less than 0', () => {
        const height = [-1, 2];
        expect(() => maxArea(height)).toThrow(
            "Each height value must be a number between 0 and 10000."
        );
    });

    test('should throw an error if an element is greater than 100000', () => {
        const height = [1, 10009];
        expect(() => maxArea(height)).toThrow(
            "Each height value must be a number between 0 and 10000."
        );
    });

    test('should throw an error if an element is not number', () => {
        const height = [-1, 'ABC'];
        expect(() => maxArea(height)).toThrow(
            "Each height value must be a number between 0 and 10000."
        );
    });
});
