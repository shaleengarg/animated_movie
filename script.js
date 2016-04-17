// once everything is loaded, we run our Three.js stuff.
//Y axis is perpendicular to the surface of the board
function init() {
    
        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        scene.add(camera);

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer();

        renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;
        
        // position and point the camera to the center of the scene
        camera.position.x = 0;
        camera.position.y = 150;
        camera.position.z = 0;
        camera.name = "camera";
        camera.lookAt(scene.position);

        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0xcc5200);
        ambientLight.name = "ambientlight";
        scene.add(ambientLight);

        //add spotlight for the shadows
        var spotLight = new THREE.SpotLight(0xffffff, 0.6); //color and brightness
        //spotLight.position.set(-40, 60, -10);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        spotLight.name = "spotlight";
        scene.add(spotLight);

    
        //add board
        var geometry = new THREE.CubeGeometry( 75, 5, 70);
        var material = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture("images/")});
        board = new THREE.Mesh(geometry, material );
        board.position.z = 0;
        board.position.x = 0;
        board.position.y = 0;
        board.castShadow = true;
        board.name = "board";
        scene.add(board);


        document.getElementById("WebGL-output").appendChild(renderer.domElement);
        
        render();

        function render() {   
            requestAnimationFrame(render);
            renderer.render(scene, camera);
            
        }

    }
    window.onload = init