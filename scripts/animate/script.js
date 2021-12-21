(function (cjs, an) {
	var p; // shortcut to reference prototypes
	var lib = {};
	var ss = {};
	var img = {};
	lib.ssMetadata = [];

	(lib.AnMovieClip = function () {
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
		};
		this.play = function () {
			cjs.MovieClip.prototype.play.call(this);
		};
		this.gotoAndStop = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
		};
		this.stop = function () {
			cjs.MovieClip.prototype.stop.call(this);
		};
	}).prototype = p = new cjs.MovieClip();
	// symbols:

	(lib.installation = function () {
		this.initialize(img.installation);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 6625, 3787);

	(lib.resistance_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// timeline functions:
		this.frame_2 = function () {
			playSound('resistance');
		};

		// actions tween:
		this.timeline.addTween(
			cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
		);

		// Слой_1
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f('rgba(0,102,204,0.2)')
			.s()
			.p('A1jKAIAAz/MArHAAAIAAT/g');
		this.shape.setTransform(8, 9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f('#0066CC').s().p('A1jKAIAAz/MArHAAAIAAT/g');
		this.shape_1.setTransform(8, 9.05);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [] })
				.to({ state: [{ t: this.shape }] }, 1)
				.to({ state: [] }, 1)
				.to({ state: [{ t: this.shape_1 }] }, 1)
				.wait(1)
		);

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-130, -55, 276, 128.1);

	(lib.oscilloscope_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// timeline functions:
		this.frame_2 = function () {
			playSound('oscilloscope');
		};

		// actions tween:
		this.timeline.addTween(
			cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
		);

		// Слой_1
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f('rgba(0,102,204,0.2)')
			.s()
			.p('A30LkIAA3HMAvpAAAIAAXHg');
		this.shape.setTransform(13, -5);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f('#0066CC').s().p('A30LkIAA3HMAvpAAAIAAXHg');
		this.shape_1.setTransform(12.5, -4.95);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [] })
				.to({ state: [{ t: this.shape }] }, 1)
				.to({ state: [] }, 1)
				.to({ state: [{ t: this.shape_1 }] }, 1)
				.wait(1)
		);

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-140, -79, 305.5, 148.1);

	(lib.generator_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// timeline functions:
		this.frame_2 = function () {
			playSound('generator');
		};

		// actions tween:
		this.timeline.addTween(
			cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
		);

		// Слой_1
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f('rgba(0,102,204,0.2)')
			.s()
			.p('A0TJ7IAAz1MAonAAAIAAT1g');
		this.shape.setTransform(18, 8);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f('#0066CC').s().p('A0TJ7IAAz1MAonAAAIAAT1g');
		this.shape_1.setTransform(18, 7.55);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [] })
				.to({ state: [{ t: this.shape }] }, 1)
				.to({ state: [] }, 1)
				.to({ state: [{ t: this.shape_1 }] }, 1)
				.wait(1)
		);

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-112, -55.9, 260, 127.4);

	(lib.cassette_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// timeline functions:
		this.frame_2 = function () {
			playSound('cassette');
		};

		// actions tween:
		this.timeline.addTween(
			cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
		);

		// Слой_1
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f('rgba(0,102,204,0.2)')
			.s()
			.p('Ay+P8IAA/3MAl9AAAIAAf3g');
		this.shape.setTransform(10, 9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f('#0066CC').s().p('Ay+P8IAA/3MAl9AAAIAAf3g');
		this.shape_1.setTransform(9.5, 9.05);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [] })
				.to({ state: [{ t: this.shape }] }, 1)
				.to({ state: [] }, 1)
				.to({ state: [{ t: this.shape_1 }] }, 1)
				.wait(1)
		);

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-112, -93, 243.5, 204.1);

	// stage content:
	(lib._2 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Слой_1
		this.instance = new lib.cassette_1();
		this.instance.setTransform(153.15, 144.2, 0.6726, 0.8016);
		new cjs.ButtonHelper(
			this.instance,
			0,
			1,
			2,
			false,
			new lib.cassette_1(),
			3
		);

		this.instance_1 = new lib.resistance_1();
		this.instance_1.setTransform(
			383.85,
			140.1,
			0.59,
			1.2782,
			0,
			0,
			0,
			0.1,
			0.1
		);
		new cjs.ButtonHelper(
			this.instance_1,
			0,
			1,
			2,
			false,
			new lib.resistance_1(),
			3
		);

		this.instance_2 = new lib.generator_1();
		this.instance_2.setTransform(363.45, 395.55, 2.0061, 1.8134);
		new cjs.ButtonHelper(
			this.instance_2,
			0,
			1,
			2,
			false,
			new lib.generator_1(),
			3
		);

		this.instance_3 = new lib.oscilloscope_1();
		this.instance_3.setTransform(744.6, 126, 1.491, 1.5544);
		new cjs.ButtonHelper(
			this.instance_3,
			0,
			1,
			2,
			false,
			new lib.oscilloscope_1(),
			3
		);

		this.instance_4 = new lib.installation();
		this.instance_4.setTransform(0, 0, 0.154, 0.154);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({
					state: [
						{ t: this.instance_4 },
						{ t: this.instance_3 },
						{ t: this.instance_2 },
						{ t: this.instance_1 },
						{ t: this.instance },
					],
				})
				.wait(1)
		);

		this._renderFirstFrame();
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(
		510.5,
		292.5,
		509.70000000000005,
		290.70000000000005
	);
	// library properties:
	lib.properties = {
		id: '9FF4C8A39244E241938B43ACCFC726A9',
		width: 1021,
		height: 585,
		fps: 24,
		color: '#FFFFFF',
		opacity: 1.0,
		manifest: [
			{ src: 'images/installation.png?1639857579112', id: 'installation' },
			{ src: 'audio/cassette.mp3?1639857579112', id: 'cassette' },
			{ src: 'audio/generator.mp3?1639857579112', id: 'generator' },
			{ src: 'audio/oscilloscope.mp3?1639857579112', id: 'oscilloscope' },
			{ src: 'audio/resistance.mp3?1639857579112', id: 'resistance' },
		],
		preloads: [],
	};

	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	};
	p.play = function () {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
	};
	p.stop = function (ms) {
		if (ms) this.seek(ms);
		this.tickEnabled = false;
	};
	p.seek = function (ms) {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
	};
	p.getDuration = function () {
		return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
	};

	p.getTimelinePosition = function () {
		return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
	};

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['9FF4C8A39244E241938B43ACCFC726A9'] = {
		getStage: function () {
			return exportRoot.stage;
		},
		getLibrary: function () {
			return lib;
		},
		getSpriteSheet: function () {
			return ss;
		},
		getImages: function () {
			return img;
		},
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	};

	an.getComposition = function (id) {
		return an.compositions[id];
	};

	an.makeResponsive = function (
		isResp,
		respDim,
		isScale,
		scaleType,
		domContainers
	) {
		var lastW,
			lastH,
			lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width,
				h = lib.properties.height;
			var iw = window.innerWidth,
				ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1,
				xRatio = iw / w,
				yRatio = ih / h,
				sRatio = 1;
			if (isResp) {
				if (
					(respDim == 'width' && lastW == iw) ||
					(respDim == 'height' && lastH == ih)
				) {
					sRatio = lastS;
				} else if (!isScale) {
					if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			domContainers[0].width = w * pRatio * sRatio;
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function (container) {
				container.style.width = w * sRatio + 'px';
				container.style.height = h * sRatio + 'px';
			});
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw;
			lastH = ih;
			lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	};
	an.handleSoundStreamOnTick = function (event) {
		if (!event.paused) {
			var stageChild = stage.getChildAt(0);
			if (!stageChild.paused || stageChild.ignorePause) {
				stageChild.syncStreamSounds();
			}
		}
	};
	an.handleFilterCache = function (event) {
		if (!event.paused) {
			var target = event.target;
			if (target) {
				if (target.filterCacheList) {
					for (var index = 0; index < target.filterCacheList.length; index++) {
						var cacheInst = target.filterCacheList[index];
						if (
							cacheInst.startFrame <= target.currentFrame &&
							target.currentFrame <= cacheInst.endFrame
						) {
							cacheInst.instance.cache(
								cacheInst.x,
								cacheInst.y,
								cacheInst.w,
								cacheInst.h
							);
						}
					}
				}
			}
		}
	};
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;

/* SCRIPT FROM HTML FILE */

var canvas,
	stage,
	exportRoot,
	anim_container,
	dom_overlay_container,
	fnStartAnimation;
function init() {
	canvas = document.getElementById('canvas');
	anim_container = document.getElementById('animation_container');
	dom_overlay_container = document.getElementById('dom_overlay_container');
	var comp = AdobeAn.getComposition('9FF4C8A39244E241938B43ACCFC726A9');
	var lib = comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener('fileload', function (evt) {
		handleFileLoad(evt, comp);
	});
	loader.addEventListener('complete', function (evt) {
		handleComplete(evt, comp);
	});
	var lib = comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images = comp.getImages();
	if (evt && evt.item.type == 'image') {
		images[evt.item.id] = evt.result;
	}
}
function handleComplete(evt, comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib = comp.getLibrary();
	var ss = comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for (i = 0; i < ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet({
			images: [queue.getResult(ssMetadata[i].name)],
			frames: ssMetadata[i].frames,
		});
	}
	exportRoot = new lib._2();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();
	//Registers the "tick" event listener.
	fnStartAnimation = function () {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener('tick', stage);
	};
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false, 'both', false, 1, [
		canvas,
		anim_container,
		dom_overlay_container,
	]);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function playSound(id, loop, offset) {
	return createjs.Sound.play(id, {
		interrupt: createjs.Sound.INTERRUPT_EARLY,
		loop: loop,
		offset: offset,
	});
}
