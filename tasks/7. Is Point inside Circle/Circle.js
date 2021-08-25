import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // Calculating the distance between point and center of circle (0 representing corresponding X values, 1 representing corresponding Y values)
      var dx = Point[0] - center[0];
      var dy = Point[1] - center[1];

      //Comparing radius of circle with distance between point and center of circle
      if( ((dx * dx) + (dy * dy)) <= (radius * radius) ) {
        return true;
      }
      return false;
    }
  }
}

/*

  For figuring out any question, we must first figure out what we currently have, the proceed to moving onto what to do with what we have.

  What we have:
  We currently have the center of a circle (x,y), the radius of the circle (a number), and the selected point (x,y).
  Now that we know what we currently have, we can now proceed to moving onto what to do.

  What to do:
  One idea is to find the distance between the center of the circle and the selected point.
  If we can figure out that the distance between them is less than the radius, this means the point is inside the circle. 
  If the distance between them is equal to the radius of the circle, then the point is on the circumference of the circle.
  If the distance is greater than the radius of the circle, then the point is outside of the circle.

  Now that we have a general idea of what to do, let's start coding it. 

  First, lets figure out the distance between the center of the circle an the selected point. 
  This can be done by using an equation:
  ((x - circle_x)^2 + (y - circle_y)^2 <= rad * rad )

  where x = x value of the point,
  where y = y value of the point,
  where circle_x  = x value of the circle, 
  where circle_y = y value of the circle,
  where rad = radius of the circle.

  To make calculations easier and readable, in my code, I made (x - circle_x) into a dx variable, and (y - circle_y) into a dy variable (lines 15 and 16).

  Then, I proceeded to compare the radius of the circle with the distance between the point and center of the circle. 
  If it was in the radius of the circle, then "true" is returned.
  If it was not in the radius of the circle, then "false" is returned.

*/
