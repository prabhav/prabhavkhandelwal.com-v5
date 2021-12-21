var main = function() {
	$('.nav-icon').click(function() {
			console.log('icon clikced');
			$('.nav-icon').toggleClass('turn');
			$('nav ul').toggleClass('close');
			$('nav ul').toggleClass('open');
	});
	// We listen to the resize event
	// window.addEventListener('resize', () => {
	// 	// We execute the same script as before
	// 	let vh = window.innerHeight * 0.01;
	// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
	// });
};

//CURTAIN.JS

$(document).ready(main);

window.addEventListener("load", function() {
	// set up our WebGL context and append the canvas to our wrapper
	var curtains = new Curtains({
	container: "canvas"
	});
	// get our plane element
	var planeElement = document.getElementsByClassName("plane")[0];
	// set our initial parameters (basic uniforms)
	var params = {
	vertexShaderID: "plane-vs", // our vertex shader ID
	fragmentShaderID: "plane-fs", // our fragment shader ID
	uniforms: {
	time: {
	name: "uTime", // uniform name that will be passed to our shaders
	type: "1f", // this means our uniform is a float
	value: 0,
	},
	},
	};
	// create our plane
	var plane = curtains.addPlane(planeElement, params);
	// if our plane has been successfully created
	if(plane) {
	plane.onRender(function() {
	// use the onRender method of our plane fired at each requestAnimationFrame call
	plane.uniforms.time.value++; // update our time uniform value
	});
	}
	});

	// basic default transition (with no rules and minimal hooks)
// barba.init({
// 	transitions: [{
// 	  leave({ current, next, trigger }) {
// 		// do something with `current.container` for your leave transition
// 		// then return a promise or use `this.async()`
// 	  },
// 	  enter({ current, next, trigger }) {
// 		// do something with `next.container` for your enter transition
// 		// then return a promise or use `this.async()`
// 	  }
// 	}]
//   });

  //BARBA
  
  // dummy example to illustrate rules and hooks
//   barba.init({
// 	transitions: [{
// 	  name: 'dummy-transition',
  
// 	  // apply only when leaving `[data-barba-namespace="home"]`
// 	  from: 'home',
  
// 	  // apply only when transitioning to `[data-barba-namespace="products | contact"]`
// 	  to: {
// 		namespace: [
// 		  'products',
// 		  'contact'
// 		]
// 	  },
  
// 	  // apply only if clicked link contains `.cta`
// 	  custom: ({ current, next, trigger })
// 		=> trigger.classList && trigger.classList.contains('cta'),
  
// 	  // do leave and enter concurrently
// 	  sync: true,
  
// 	  // available hooks…
// 	  beforeOnce() {},
// 	  once() {},
// 	  afterOnce() {},
// 	  beforeLeave() {},
// 	  leave() {},
// 	  afterLeave() {},
// 	  beforeEnter() {},
// 	  enter() {},
// 	  afterEnter() {}
// 	}]
//   });