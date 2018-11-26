	var diagonalLine = function(){
		var width = window.innerWidth;
		var height = window.innerHeight;
		var hip = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)); // pisagor

		var sin = Math.asin(height / hip) * (180 / Math.PI); // inverse sin

		$(".thing").css("width", (hip + 3) + "px"); // hipotenus
		$(".thing").css("transform", "rotate(-"+ sin +"deg)");
	}

	$(window).on("resize", diagonalLine);

	diagonalLine();

  $(window).load(function() {
    // stairway to \__
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    
    //
    // viewport unit fixer
    //

    window.viewportUnitsBuggyfill.init({
      refreshDebounceWait: 50,
      hacks: window.viewportUnitsBuggyfillHacks
    });

  });


  /* to my new world        */
  /* my brave new world     */
  /* where right is wrong   */
  /* where justice is gone  */

! function(a, b) {
  "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.glitch = b()
}(this, function() {
  function a(a, k, l) {
    if (i(a) && j(k, "parameters", "object") && j(l, "callback", "function")) {
      for (n = h(k), b(v, a), b(w, a), o = d(a, n.quality), p = f(o), q = e(p), t = 0, u = n.iterations; u > t; t++) c(p, q, n.seed, n.amount, t, n.iterations);
      r = new Image, r.onload = function() {
        x.drawImage(r, 0, 0), s = x.getImageData(0, 0, a.width, a.height), l(s)
      }, r.src = g(p)
    }
  }

  function b(a, b) {
    a.width !== b.width && (a.width = b.width), a.height !== b.height && (a.height = b.height)
  }

  function c(a, b, c, d, e, f) {
    var g = a.length - b - 4,
      h = parseInt(g / f * e, 10),
      i = parseInt(g / f * (e + 1), 10),
      j = i - h,
      k = parseInt(h + j * c, 10);
    k > g && (k = g);
    var l = Math.floor(b + k);
    a[l] = Math.floor(256 * d)
  }

  function d(a, b) {
    var c = "number" == typeof b && 1 > b && b > 0 ? b : .1;
    y.putImageData(a, 0, 0);
    var d = w.toDataURL("image/jpeg", c);
    switch (d.length % 4) {
      case 3:
        d += "=";
        break;
      case 2:
        d += "==";
        break;
      case 1:
        d += "==="
    }
    return d
  }

  function e(a) {
    var b = 417;
    for (t = 0, u = a.length; u > t; t++)
      if (255 === a[t] && 218 === a[t + 1]) {
        b = t + 2;
        break
      }
    return b
  }

  function f(a) {
    var b, c, d, e = [];
    for (t = 23, u = a.length; u > t; t++) {
      switch (c = B[a.charAt(t)], b = (t - 23) % 4) {
        case 1:
          e.push(d << 2 | c >> 4);
          break;
        case 2:
          e.push((15 & d) << 4 | c >> 2);
          break;
        case 3:
          e.push((3 & d) << 6 | c)
      }
      d = c
    }
    return e
  }

  function g(a) {
    var b, c, d, e = ["data:image/jpeg;base64,"];
    for (t = 0, u = a.length; u > t; t++) {
      switch (c = a[t], b = t % 3) {
        case 0:
          e.push(A[c >> 2]);
          break;
        case 1:
          e.push(A[(3 & d) << 4 | c >> 4]);
          break;
        case 2:
          e.push(A[(15 & d) << 2 | c >> 6]), e.push(A[63 & c])
      }
      d = c
    }
    return 0 === b ? (e.push(A[(3 & d) << 4]), e.push("==")) : 1 === b && (e.push(A[(15 & d) << 2]), e.push("=")), e.join("")
  }

  function h(a) {
    return {
      seed: (a.seed || 0) / 100,
      quality: (a.quality || 0) / 100,
      amount: (a.amount || 0) / 100,
      iterations: a.iterations || 0
    }
  }

  function i(a) {
    return j(a, "image_data", "object") && j(a.width, "image_data.width", "number") && j(a.height, "image_data.height", "number") && j(a.data, "image_data.data", "object") && j(a.data.length, "image_data.data.length", "number") && k(a.data.length, "image_data.data.length", l, "> 0") ? !0 : !1
  }

  function j(a, b, c) {
    return typeof a === c ? !0 : (m(a, "typeof " + b, '"' + c + '"', '"' + typeof a + '"'), !1)
  }

  function k(a, b, c, d) {
    return c(a) === !0 ? !0 : (m(a, b, d, "not"), void 0)
  }

  function l(a) {
    return a > 0
  }

  var n, o, p, q, r, s, t, u, v = document.createElement("canvas"),
    w = document.createElement("canvas"),
    x = v.getContext("2d"),
    y = w.getContext("2d"),
    z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    A = z.split(""),
    B = {};
  return A.forEach(function(a, b) {
    B[a] = b
  }), a
});

var on = function(context, eventType, eventCallback, useCapture) {
  if (context && eventType && eventCallback) {
    var events = String(eventType).split(' ');
    while (events.length) {
      eventType = events.pop();
      if (context.addEventListener) {
        context.addEventListener(eventType, eventCallback, useCapture);
      } else {
        context.attachEvent('on' + eventType, eventCallback, useCapture);
      }
    }
  }
};

function distortCanvas(canvas, delay) {
  var ctx = canvas.getContext('2d');
  var originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var drawImageData = function(imageData) {
    ctx.putImageData(imageData, 0, 0);
  }
  var interval_id;
  
    clearInterval(interval_id);
    interval_id = setInterval(function() {
      var parameters = {
        amount: 1,
        seed: Math.round(Math.random() * 100),
        iterations: 1,
        quality: 100
      };
      glitch(imageData, parameters, drawImageData);
    }, delay || 30);
  
  on(canvas, 'click', function() {
    clearInterval(interval_id);
    drawImageData(originalImageData);
    $("canvas").remove();
    $("#initiate").addClass("now");
  });
}

function distortNode(node) {
  html2canvas(node, {
    onrendered: function(canvas) {
      node.style.display = "none";
      node.parentNode.appendChild(canvas);
      distortCanvas(canvas);
    }
  });

}

distortNode(document.getElementById('initiate'));
