(() => {
  var e = {
    574(e, a, t) {
      const n = () => {
        (XR8.XrController.configure({ imageTargetData: [t(534), t(882)] }),
          XR8.addCameraPipelineModule(LandingPage.pipelineModule()));
      };
      window.XR8 ? n() : window.addEventListener("xrloaded", n);
    },
    882(e) {
      "use strict";
      e.exports = JSON.parse(
        '{"type":"PLANAR","properties":{"top":106,"left":0,"width":741,"height":988,"isRotated":true,"originalWidth":741,"originalHeight":1200},"imagePath":"image-targets/Pag1_luminance.jpg","metadata":null,"name":"Pag1","resources":{"originalImage":"Pag1_original.jpg","croppedImage":"Pag1_cropped.jpg","thumbnailImage":"Pag1_thumbnail.jpg","luminanceImage":"Pag1_luminance.jpg"},"created":1789421635364,"updated":1789421635364}',
      );
    },
    534(e) {
      "use strict";
      e.exports = JSON.parse(
        '{"type":"PLANAR","properties":{"top":0,"left":19,"width":494,"height":659,"isRotated":false,"originalWidth":533,"originalHeight":659},"imagePath":"image-targets/provaAR_luminance.png","metadata":null,"name":"provaAR","resources":{"originalImage":"provaAR_original.png","croppedImage":"provaAR_cropped.png","thumbnailImage":"provaAR_thumbnail.png","luminanceImage":"provaAR_luminance.png"},"created":1788813796394,"updated":1788813796394}',
      );
    },
  };
  const a = {};
  function t(n) {
    const o = a[n];
    if (void 0 !== o) return o.exports;
    const i = (a[n] = { exports: {} });
    return (e[n](i, i.exports, t), i.exports);
  }
  (() => {
    "use strict";
    (t(574),
      window.ecs.registerComponent({
        name: "example-component",
        add: () => {
          console.log("Component attached.");
        },
      }));
    const e = JSON.parse(
      '{"objects":{"47699d9e-18a5-4f88-a4f9-b8be92e8f74a":{"components":{},"geometry":null,"id":"47699d9e-18a5-4f88-a4f9-b8be92e8f74a","light":{"type":"ambient"},"material":null,"name":"Ambient Light","position":[10.316706469929958,5,5],"rotation":[0,0,0,1],"scale":[1,1,1],"parentId":"88453035-dc0f-486d-868a-8ff7c2fda864","order":0.4038940050501252},"729478ae-d067-4e0c-a753-66c2e9efb625":{"components":{"8fe14f4e-4311-4b03-807d-a34c9c11368d":{"id":"8fe14f4e-4311-4b03-807d-a34c9c11368d","name":"example-component","parameters":{}}},"geometry":{"type":"box","depth":1,"height":1,"width":1},"id":"729478ae-d067-4e0c-a753-66c2e9efb625","material":{"color":"#ffffff","type":"basic","textureFiltering":"smooth","opacity":1,"wireframe":false,"textureSrc":{"type":"asset","asset":"assets/Pag1.jpeg"},"side":"front","wrap":"repeat","roughness":0.5,"metalness":0.5},"name":"Box","position":[0,0.8099013242537817,0],"rotation":[0,0,0,1],"scale":[1,1,0.1],"parentId":"0a97972f-56a4-4110-a54a-a4d92a6e95b8","order":1.4038940050501252,"hidden":false},"a608ddd9-9379-464d-966f-5d8d8674c83c":{"camera":{"type":"perspective","xr":{"desktop":"disabled","xrCameraType":"world","headset":"disabled","phone":"AR"},"farClip":1000},"components":{},"geometry":null,"id":"a608ddd9-9379-464d-966f-5d8d8674c83c","material":null,"name":"Camera","position":[0,1.2043601877820191,3],"rotation":[0.00044368872331410124,0.9659425615285845,-0.25875089860082223,0.0016563336561801576],"scale":[1,1,1],"parentId":"88453035-dc0f-486d-868a-8ff7c2fda864","order":1.0308214152219775},"ac1989e3-3b71-49e2-a05f-e682aeb18c36":{"components":{},"geometry":null,"id":"ac1989e3-3b71-49e2-a05f-e682aeb18c36","light":{"intensity":1,"type":"directional"},"material":null,"name":"Directional Light","position":[5.895039766347033,22.32020428444903,23.83989785777519],"rotation":[0,0,0,1],"scale":[1,1,1],"parentId":"88453035-dc0f-486d-868a-8ff7c2fda864","order":0.6644431107322474},"0a97972f-56a4-4110-a54a-a4d92a6e95b8":{"id":"0a97972f-56a4-4110-a54a-a4d92a6e95b8","position":[0,0,0],"rotation":[0,0,0,1],"scale":[1,1,1],"geometry":null,"material":null,"parentId":"88453035-dc0f-486d-868a-8ff7c2fda864","components":{},"name":"Image Target","imageTarget":{"name":"Pag1"},"order":3.3340299228963026},"c88f6e6c-e984-4038-9e52-3883b0838750":{"id":"c88f6e6c-e984-4038-9e52-3883b0838750","position":[0,0,0],"rotation":[0,0,0,1],"scale":[1,1,1],"geometry":null,"material":null,"components":{},"name":"Empty Object","order":1.5779862591925602,"prefab":true},"6f25a773-8b49-4b53-af35-94a0d3e4da2b":{"id":"6f25a773-8b49-4b53-af35-94a0d3e4da2b","position":[0,0,0],"rotation":[0,0,0,1],"scale":[1,1,1],"geometry":null,"material":null,"parentId":"c88f6e6c-e984-4038-9e52-3883b0838750","components":{},"name":"Image Target","imageTarget":{"name":"Pag1"},"order":1.505958175596371}},"spaces":{"88453035-dc0f-486d-868a-8ff7c2fda864":{"id":"88453035-dc0f-486d-868a-8ff7c2fda864","name":"Default Space","activeCamera":"a608ddd9-9379-464d-966f-5d8d8674c83c","fog":null}},"entrySpaceId":"88453035-dc0f-486d-868a-8ff7c2fda864"}',
    );
    (delete e.history, delete e.historyVersion, window.ecs.application.init(e));
  })();
})();
