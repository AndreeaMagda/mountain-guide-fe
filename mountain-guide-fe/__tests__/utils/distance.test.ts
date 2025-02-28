import { calculateDistance } from '../../utils/distance';

describe('Distance Calculation Tests', () => {
  test('should calculate a simple distance', () => {
    // Arrange
    const point1 = {
      lat: 0,
      lon: 0,
    };
    const point2 = {
      lat: 1,
      lon: 1,
    };

    // Act
    const distance = calculateDistance(
      point1.lat,
      point1.lon,
      point2.lat,
      point2.lon
    );

    // Assert
    expect(distance).toBeGreaterThan(0);
  });

  test('should return zero for same point', () => {
    // Arrange
    const point = {
      lat: 45.5975,
      lon: 24.7425,
    };

    // Act
    const distance = calculateDistance(
      point.lat,
      point.lon,
      point.lat,
      point.lon
    );

    // Assert
    expect(distance).toBe(0);
  });

  test('should calculate distance between two mountain peaks', () => {
    // Arrange
    const moldoveanu = {
      lat: 45.5975,
      lon: 24.7425,
    };
    const negoiu = {
      lat: 45.5847,
      lon: 24.7156,
    };

    // Act
    const distance = calculateDistance(
      moldoveanu.lat,
      moldoveanu.lon,
      negoiu.lat,
      negoiu.lon
    );

    // Assert
    expect(distance).toBeGreaterThan(2.5);
    expect(distance).toBeLessThan(3.5);
  });
});
