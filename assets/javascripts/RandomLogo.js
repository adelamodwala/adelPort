// RandomLogo Library

var RandomLogo = function(n) {
	var ctx, axis, scale, dotSize, drawTimeout;

	// func: boxMeuller
	// Return a list of two iid N(0,1) rvs each
	// with n points.
	function boxMeuller(n) {
		var lst = [];
		var pi = Math.PI;
		for(var i=0; i < n; i++) {
			var U = {u1: Math.random(), u2: Math.random()}
			var Z = {
				z1: Math.sqrt(-2*Math.log(U.u1)) * Math.cos(2*pi*U.u2),
				z2: Math.sqrt(-2*Math.log(U.u1)) * Math.sin(2*pi*U.u2),
			}
			lst.push(Z);
		}
		return lst;
	}

	// func: corrNorm
	// Return a list of two iid N(0,1) rvs Z1 and Z2 and 
	// one correlated relationship Y comprised of Z1, Z2, and
	// the correlation factor rho, totalling n points.
	function corrNorm(n, rho) {
		var lstZ = boxMeuller(n);
		var lstY = [];
		for(var i=0; i < n; i++) {
			var Z = lstZ[i];
			var Y = rho*Z.z1 + Math.sqrt(1 - rho^2)*Z.z2;
			lstZ[i].y = Y;
		}
		return lstZ;
	}

	function genRho() {
		var dir = Math.random() < 0.5 ? -1 : 1;
		return Math.random() * dir;
	}


	function randomPlot(){
		var largeCan = innerWidth > 800 && !isMobile;
		axis = largeCan ? 128 : 37.5;
		scale = {
			x: largeCan ? 32 : 16,
			y: largeCan ? 32 : 13.25,
		}
		ctx = document.getElementById('myCanvas').getContext("2d");
		var canvasSize = largeCan ? 256 : 75;
		dotSize = canvasSize / 100;
		ctx.canvas.width = canvasSize;
		ctx.canvas.height = canvasSize;
		startPlot();

	}

	function startPlot() {
		ctx.beginPath();
		clearTimeout(drawTimeout);
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		var n = 1000;
		var Z = corrNorm(n, genRho());
		chainPlot(0, n, Z);
		console.log(n);
		// for(var i=0; i < n; i++) {
		// 	var x = axis + Z[i].z1 * scale.x;
		// 	var y = axis + Z[i].y * scale.y;
		// 	ctx.beginPath();
		// 	ctx.arc(x, y, dotSize, 0, 2 * Math.PI, true);
		// 	ctx.closePath();
		// 	ctx.fill();
		// }
	}

	function chainPlot(i, n, Z) {
		if(i < n) {
			var x = axis + Z[i].z1 * scale.x;
			var y = axis + Z[i].y * scale.y;
			ctx.beginPath();
			ctx.arc(x, y, dotSize, 0, 2 * Math.PI, true);
			ctx.closePath();
			ctx.fill();
		}
		if(i < n - 1) {
			var delay = Math.round(Math.random * 300);
			drawTimeout = setTimeout(function() {
				chainPlot(i + 1, n, Z);
			}, delay)
		}
	}

	function enable() {
		randomPlot();
	}

	return {
		enable: enable,
		randomPlot: randomPlot,
		startPlot: startPlot
	}
}