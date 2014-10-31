(function(){



    //*************************************************************
    // function to rotate the slider
    //*************************************************************

    // function to rotate the main box


    console.log("what is this",this);

    var projectInfo  = [
        {
            class : "p1",
            name : "Start Mining",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iusto. Perspiciatis voluptates earum id unde temporibus rerum, aut eveniet enim illo, fugiat voluptatem accusantium maxime mollitia, dolores officiis sequi eos.",
            type : "Open Source",
            position : "Front End Developer",
            technologies : ["Angular.js","Firebase","Bootstrap"]
        },

        {
            class : "p2",
            name : "Sora",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptatum omnis alias totam, veniam nam soluta nesciunt repudiandae reiciendis necessitatibus rem eum, cum quia voluptas exercitationem fugiat molestias aliquam. Alias.",
            type : "Open Source",
            position : "Front End Developer",
            technologies : ["Angular.js","Firebase","CSS3"]
        },

        {
            class : "p3",
            name : "Octolog",
            description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nisi, cum suscipit, vitae provident eos dolorum ad. Ullam non blanditiis commodi, eaque provident mollitia doloremque iste aliquam similique, a perspiciatis!",
            type :"Open Source",
            position :"JavaScript Developer",
            technologies : ["Angular.js","Node.js","Node-Webkit","NedDB"]
        },

        {
            class : "p4",
            name : "ng-chat",
            description : ",Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nulla minima expedita iusto. Ut quam maiores officia dolorum repudiandae quae obcaecati. Ipsam, rerum optio quam vel asperiores aperiam ad animi!",
            type : "Open Source",
            position : "JavaScript/Front-End Developer",
            technologies :["Angular.js","Firebase","CSS3"]
        },

        {
            class : "p5",
            name : "This Portfolio",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt qui doloribus itaque enim deserunt accusantium et, sed sit, quos natus harum consectetur explicabo, a velit! Aspernatur placeat incidunt non tempora.",
            type : "Personal Portfolio",
            position : "Front End Developer",
            technologies : ["CSS3","HTML5","JQuery","Modernizr"]
        },

        {
            class : "p6",
            name : "Startup Ranking",
            description :",Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque vitae illo culpa aliquam dolore distinctio commodi, soluta. Excepturi cumque quasi, molestiae facere, eaque modi temporibus autem doloribus voluptate dolores sunt.",
            type : "Web Portal",
            position :"Front End Developer",
            technologies : ["CSS3","HTML5"]
        },

        {
            class : "p7",
            name : "CSS Design",
            description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quod, doloremque rem vel impedit ab ipsa reprehenderit laudantium accusantium recusandae aperiam sint omnis doloribus, porro est nisi voluptatem molestias voluptatibus!",
            type : "Open Source",
            position : "Front End Developer",
            technologies :["CSS3","HTML5","JQuery"]
        }

    ];

    var sliderFunctions = {

        timeOutReference : undefined,

        currentFace : 1,

        currentProject : 1,

        flagSlider : true,

        replaceArrValues : function(numArr, strArr){
            for(var i in numArr){
                strArr[i] = String(numArr[i]);
            }
            return strArr;
        },

        rotateToFaceMainBox : function(face){
            // Notes
            // 3d matrix with 0 rotation:
            // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -245, 1)
            // 3d matrix with 90 rotation:
            // matrix3d(1, 0, 0, 0, 0, 6.12323399573677e-17, -1, 0, 0, 1, 6.12323399573677e-17, 0, 0, 0, -245, 1)
            // 3d matrix with 180 rotation:
            // matrix3d(1, 0, 0, 0, 0, -1, -1.22464679914735e-16, 0, 0, 1.22464679914735e-16, -1, 0, 0, 0, -245, 1)
            // 3d matrix with 270 rotation:
            // matrix3d(1, 0, 0, 0, 0, -1.83697019872103e-16, 1, 0, 0, -1, -1.83697019872103e-16, 0, 0, 0, -245, 1)

            var matrixContent = $('.main-port-box').css('transform');
            var matrixArr = matrixContent.substr(9,matrixContent.length-10).split(",");

            switch (face){
                case 1:
                    matrixArr[5] = "1";
                    matrixArr[6] = "0";
                    matrixArr[9] = "0";
                    matrixArr[10] = "1";
                    break;
                case 2:
                    matrixArr[5] = "6.12323399573677e-17";
                    matrixArr[6] = "-1";
                    matrixArr[9] = "1";
                    matrixArr[10] = "6.12323399573677e-17";
                    break;
                case 3:
                    matrixArr[5] = "-1";
                    matrixArr[6] = "-1.22464679914735e-16";
                    matrixArr[9] = "1.22464679914735e-16";
                    matrixArr[10] = "-1";
                    break;
                case 4:
                    matrixArr[5] = "-1.83697019872103e-16";
                    matrixArr[6] = "1";
                    matrixArr[9] = "-1";
                    matrixArr[10] = "-1.83697019872103e-16";
                    break;
            }

            matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
            $('.main-port-box').css('transform',matrixContent);
        },

        rotateToFaceProDetail : function(face){


            var matrixContent = $('.project-detail').css('transform');
            var matrixArr = matrixContent.substr(9,matrixContent.length-10).split(",");

            // face 1
            stepOneFaceOne = [0.6, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0.6, 0, 0, 0];
            stepTwoFaceOne = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0];

            // face 2
            stepOneFaceTwo =[4.89858719658941e-17, 0, -0.6, 0, 0, 0.6, 0, 0, 0.6, 0, 4.89858719658941e-17, 0, 0, 0];
            stepTwoFaceTwo =[6.12323399573677e-17, 0, -1, 0, 0, 1, 0, 0, 1, 0, 6.12323399573677e-17, 0, 0, 0];

            // face 3
            stepOneFaceThree =[-0.6, 0, -9.79717439317883e-17, 0, 0, 0.6, 0, 0, 9.79717439317883e-17, 0, -0.6, 0, 0, ];
            stepTwoFaceThree =[-1, 0, -1.22464679914735e-16, 0, 0, 1, 0, 0, 1.22464679914735e-16, 0, -1, 0, 0, 0];

            // face 4
            stepOneFaceFour =[-1.46957615897682e-16, 0, 0.6, 0, 0, 0.6, 0, 0, -0.6, 0, -1.46957615897682e-16, 0, 0, 0];
            stepTwoFaceFour =[-1.83697019872103e-16, 0, 1, 0, 0, 1, 0, 0, -1, 0, -1.83697019872103e-16, 0, 0, 0];

            switch (face){
                case 1:
                    this.replaceArrValues(stepOneFaceOne,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-detail').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceOne,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-detail').css('transform',matrixContent)},450);
                    break;
                case 2:
                    this.replaceArrValues(stepOneFaceTwo,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-detail').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceTwo,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-detail').css('transform',matrixContent)},450);
                    break;
                case 3:
                    this.replaceArrValues(stepOneFaceThree,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-detail').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceThree,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-detail').css('transform',matrixContent)},450);
                    break;
                case 4:
                    this.replaceArrValues(stepOneFaceFour,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-detail').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceFour,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-detail').css('transform',matrixContent)},450);
                    break;
            };
        },

        rotateToFaceProSpecs : function(face){


            var matrixContent = $('.project-spects').css('transform');
            var matrixArr = matrixContent.substr(9,matrixContent.length-10).split(",");

            // face 1
            stepOneFaceOne = [0.6, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0.6, 0, 0, 0];
            stepTwoFaceOne = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0];

            // face 4
            stepOneFaceTwo =[-1.46957615897682e-16, 0, 0.6, 0, 0, 0.6, 0, 0, -0.6, 0, -1.46957615897682e-16, 0, 0, 0];
            stepTwoFaceTwo =[-1.83697019872103e-16, 0, 1, 0, 0, 1, 0, 0, -1, 0, -1.83697019872103e-16, 0, 0, 0];
            // face 3
            stepOneFaceThree =[-0.6, 0, -9.79717439317883e-17, 0, 0, 0.6, 0, 0, 9.79717439317883e-17, 0, -0.6, 0, 0, ];
            stepTwoFaceThree =[-1, 0, -1.22464679914735e-16, 0, 0, 1, 0, 0, 1.22464679914735e-16, 0, -1, 0, 0, 0];

            // face 2
            stepOneFaceFour =[4.89858719658941e-17, 0, -0.6, 0, 0, 0.6, 0, 0, 0.6, 0, 4.89858719658941e-17, 0, 0, 0];
            stepTwoFaceFour =[6.12323399573677e-17, 0, -1, 0, 0, 1, 0, 0, 1, 0, 6.12323399573677e-17, 0, 0, 0];


            switch (face){
                case 1:
                    this.replaceArrValues(stepOneFaceOne,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-spects').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceOne,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-spects').css('transform',matrixContent)},450);
                    break;
                case 2:
                    this.replaceArrValues(stepOneFaceTwo,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-spects').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceTwo,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-spects').css('transform',matrixContent)},450);
                    break;
                case 3:
                    this.replaceArrValues(stepOneFaceThree,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-spects').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceThree,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-spects').css('transform',matrixContent)},450);
                    break;
                case 4:
                    this.replaceArrValues(stepOneFaceFour,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-spects').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceFour,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-spects').css('transform',matrixContent)},450);
                    break;
            };
        },

        getFaceForProject : function(projectNum){
          if(projectNum % 4){
            return projectNum % 4;
          }
          return 4;
        },

        updateProjectFace : function(face,project) {
            console.log("face",face,'project',project,"damm",this["face" + face]);
            this["face" + face].main.empty();
            this["face" + face].detail.empty();
            this["face" + face].spect.empty();

            this["face" + face].main.loadTemplate($("#project-main-view-template"),
            {
                class:projectInfo[project-1].class,
                name:projectInfo[project-1].name
            });

            this["face" + face].detail.loadTemplate($("#projects-description-template"),
            {
                class:projectInfo[project-1].class,
                name:projectInfo[project-1].name,
                description:projectInfo[project-1].description,
                type:projectInfo[project-1].type,
                position:projectInfo[project-1].position
            });
            this["face" + face].spect.loadTemplate($("#project-spects-template"),
            {
                class:projectInfo[project-1].class
            });
        }
    }

    var slider = {

        rotateSliderToFace : function(face) {

            sliderFunctions.rotateToFaceMainBox(face);
            sliderFunctions.rotateToFaceProDetail(face);
            sliderFunctions.rotateToFaceProSpecs(face)
            sliderFunctions.currentFace = face;
        },

        showProject : function(projectNum){
            var targetFace = sliderFunctions.getFaceForProject(projectNum);
            if(sliderFunctions.currentFace == targetFace){
                if(targetFace == 1){
                  this.rotateSliderToFace(3);
                  setTimeout(function(){
                    slider.rotateSliderToFace(targetFace);
                    sliderFunctions.updateProjectFace(targetFace,projectNum);
                    sliderFunctions.flagSlider = true;
                  },700);
                } else {
                  this.rotateSliderToFace(targetFace - 1);
                  sliderFunctions.updateProjectFace(targetFace,projectNum);
                  setTimeout(function(){
                    slider.rotateSliderToFace(targetFace);
                    sliderFunctions.flagSlider = true;
                  },700);
                }
            } else {
              sliderFunctions.updateProjectFace(targetFace,projectNum);
              this.rotateSliderToFace(targetFace);
              sliderFunctions.flagSlider = true;
            }
            sliderFunctions.currentProject = projectNum;
        },

        getCurrentFace : function() {
            return sliderFunctions.currentFace;
        },

        showNextProject : function() {

          var limit = projectInfo.length;

          if(sliderFunctions.currentProject != limit){
            this.showProject(sliderFunctions.currentProject + 1);
          } else {
            this.showProject(1);
          }
        },

        play : function(delay) {
          sliderFunctions.timeOutReference = setInterval(function() {
            slider.showNextProject();
          }, delay);
        },

        pause : function() {
          clearInterval(sliderFunctions.timeOutReference);
        }
    }

    window.slider = slider;

    // initializing slider controller

    $(document).ready(function(){

      // logic for switch buttons in controllers

      $(".switch.proj").bind("click",function(){
        if(sliderFunctions.flagSlider){
          var that = this;
          $('.switch.proj').each(function(){
            if($(this).index() != $(that).index() && !$(this).hasClass("on")){
              $(this).toggleClass("on");
            }
          });
          if($(this).hasClass("on")){
            $(this).removeClass("on");
            slider.showProject($(this).index()+1);
          }
        }
      });

      // logic to play/stop the slider

      $(".switch.ctr").bind("click",function(){

        if($(this).hasClass("on")){
          $(this).removeClass("on");

          if($(this).hasClass("play")){
            $(".switch.ctr.pause").toggleClass("on");
            slider.pause();
          } else {
            $(".switch.ctr.play").toggleClass("on");
            slider.play(2000);
          }
        }
      });

      // inicializing references to slider's DOM elemments

      sliderFunctions.face1 = {
        main : $('.main-port-box .main-box-front'),
        detail : $('.project-detail .detail-box-front'),
        spect : $('.project-spects .spects-box-front')
      };

      sliderFunctions.face2 = {
        main : $('.main-port-box .main-box-top'),
        detail : $('.project-detail .detail-box-left'),
        spect : $('.project-spects .spects-box-right')
      };

      sliderFunctions.face3 = {
        main : $('.main-port-box .main-box-back'),
        detail : $('.project-detail .detail-box-back'),
        spect : $('.project-spects .spects-box-back')
      };

      sliderFunctions.face4 = {
        main : $('.main-port-box .main-box-bottom'),
        detail : $('.project-detail .detail-box-right'),
        spect : $('.project-spects .spects-box-left')
      };

    });

    slider.play(2000);

})();