const fingerLookupIndices = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

/**
 *
 * @param {*} predictions a list of Keypoints for hands
 * @param {*} ctx Canvas to draw
 */

const drawPath = (points, ctx) => {
  const region = new Path2D();
  region.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point.x, point.y);
    ctx.stroke(region);
  }
};

const drawPoint = (ctx, x, y, r) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 3 * Math.PI);
  ctx.fill();
};

const drawHandKeypoints = (predictions, ctx) => {
  if (predictions.length > 0) {
    predictions.forEach((prediction) => {
      ctx.fillStyle = prediction.handedness === "Right" ? "indigo" : "Red";
      ctx.strokeStyle = "Yellow";
      ctx.lineWidth = 2;

      const keypoints = prediction.keypoints;
      const fingers = Object.keys(fingerLookupIndices);

      for (let i = 0; i < fingers.length; i++) {
        const finger = fingers[i];
        const points = fingerLookupIndices[finger].map((idx) => keypoints[idx]);

        drawPath(points, ctx);
        // const region = new Path2D();
        // region.moveTo(points[0].x, points[0].y);

        // for (let i = 1; i < points.length; i++) {
        //   const point = points[i];
        //   region.lineTo(point.x, point.y);
        //   ctx.stroke(region);
        // }
      }

      for (let i = 0; i < keypoints.length; i++) {
        const x = keypoints[i].x;
        const y = keypoints[i].y;

        drawPoint(ctx, x, y, 5);

        // ctx.beginPath();
        // ctx.arc(x, y, 5, 0, 3 * Math.PI);
        // ctx.fill();
      }
    });
  }
};

export { drawHandKeypoints };
