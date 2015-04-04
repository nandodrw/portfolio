
(function(){

    $(document).ready(function(){


        //*****************************************************
        //**************    portfolio slider    ***************
        //*****************************************************

        // function to rotate the slider

        // function to rotate the main box


        var projectInfo  = [
            {
                name : "Start Mining",
                imgClass: "start-mining",
                description : "Social media tool to discover popular content in Facebook.",
                type : "Open Source",
                position : "Software Engineer"
            },

            {
                name : "Sora",
                imgClass: "sora",
                description : "Social Network for girls graduated from college.",
                type : "Open Source",
                position : "Software Engineer"
            },

            {
                name : "Octolog",
                imgClass: "octolog",
                description : "Desktop tool to record the learning process while developing a project on GitHub.",
                type : "Open Source",
                position : "Software Engineer"
            },

            {
                name : "MakerSquare",
                imgClass: "mks",
                description : "MakerSquare main marketing web portal.",
                type : "Open Source",
                position : "Software Engineer"
            },

            {
                name : "Biia Lab",
                imgClass: "biia",
                description : "E-learning web platform.",
                type : "Personal Portfolio",
                position : "Software Engineer"
            },

            {
                name : "Startup Ranking",
                imgClass: "sr",
                description : "Startup that generates ranking of other startups around the world.",
                type : "Web Portal",
                position : "UI Developer"
            },

            {
                name : "This Portfolio",
                imgClass: "portfolio",
                description : "Personal marketing web portal.",
                type : "Open Source",
                position : "Software Engineer"
            },

            {
                name : "Coding Lessons",
                imgClass: "coding",
                description : "I Helped MakerSquare's student to develop code based academic projects.",
                type : "Open Source",
                position : "Software Engineer"
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

                var mainPortBox = document.getElementsByClassName('main-port-box')[0];
                var matrixContent = mainPortBox.style.transform;
                if(matrixContent[6] === '3' && matrixContent[7] === 'd'){
                    var matrixArr = matrixContent.substr(9,matrixContent.length-10).split(",");

                    switch (face){
                        case 1:
                            matrixArr[5] = "1";
                            matrixArr[6] = "0";
                            matrixArr[9] = "0";
                            matrixArr[10] = "1";
                            break;
                        case 2:
                            // matrixArr[5] = "6.12323399573677e-17";
                            matrixArr[5] = "0.0000000000000000612323399573677";
                            matrixArr[6] = "-1";
                            matrixArr[9] = "1";
                            // matrixArr[10] = "6.12323399573677e-17";
                            matrixArr[10] = "0.0000000000000000612323399573677";
                            break;
                        case 3:
                            matrixArr[5] = "-1";
                            // matrixArr[6] = "-1.22464679914735e-16";
                            matrixArr[6] = "-0.000000000000000122464679914735";
                            // matrixArr[9] = "1.22464679914735e-16";
                            matrixArr[9] = "0.000000000000000122464679914735";
                            matrixArr[10] = "-1";
                            break;
                        case 4:
                            // matrixArr[5] = "-1.83697019872103e-16";
                            matrixArr[5] = "-0.000000000000000183697019872103";
                            matrixArr[6] = "1";
                            matrixArr[9] = "-1";
                            // matrixArr[10] = "-1.83697019872103e-16";
                            matrixArr[10] = "-0.000000000000000183697019872103";
                            break;
                    }

                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    mainPortBox.style.transform = matrixContent;
                    mainPortBox.style.webkitTransform = matrixContent;
                    mainPortBox.style.mozTransform = matrixContent;
                    mainPortBox.style.msTransform = matrixContent;

                }
            },

            rotateToFaceProDetail : function(face){

                var projectDetail = document.getElementById('project-detail');
                var matrixContent = projectDetail.style.transform;

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
                        projectDetail.style.transform = matrixContent;

                        projectDetail.style.webkitTransform = matrixContent;
                        // $('#project-detail').css('-webkit-transform', "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -186.5, 1)")
                        projectDetail.style.mozTransform = matrixContent;
                        projectDetail.style.msTransform = matrixContent;

                        this.replaceArrValues(stepTwoFaceOne,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";

                        projectDetail.style.webkitTransform = matrixContent;
                        projectDetail.style.mozTransform = matrixContent;
                        projectDetail.style.msTransform = matrixContent;

                        setTimeout(function(){
                            projectDetail.style.transform = matrixContent;
                            projectDetail.style.webkitTransform = matrixContent;
                            // $('#project-detail').css('-webkit-transform', "matrix3d(-0.6,0,-9.79717439317883e-17,0,0,0.6,0,0,9.79717439317883e-17,0,-0.6,0,0,0, -186.5, 1)")
                            projectDetail.style.mozTransform = matrixContent;
                            projectDetail.style.msTransform = matrixContent;
                        },450);
                        break;
                    case 2:
                        this.replaceArrValues(stepOneFaceTwo,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";

                        projectDetail.style.transform = matrixContent;
                        projectDetail.style.webkitTransform = matrixContent;
                        // $('#project-detail').css('-webkit-transform', "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -186.5, 1)")
                        projectDetail.style.mozTransform = matrixContent;
                        projectDetail.style.msTransform = matrixContent;

                        this.replaceArrValues(stepTwoFaceTwo,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                        setTimeout(function(){
                            projectDetail.style.transform = matrixContent;
                            projectDetail.style.webkitTransform = matrixContent;
                            // $('#project-detail').css('-webkit-transform', "matrix3d(-0.6,0,-9.79717439317883e-17,0,0,0.6,0,0,9.79717439317883e-17,0,-0.6,0,0,0, -186.5, 1)")
                            projectDetail.style.mozTransform = matrixContent;
                            projectDetail.style.msTransform = matrixContent;
                        },450);
                        break;
                    case 3:
                        this.replaceArrValues(stepOneFaceThree,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";

                        projectDetail.style.transform = matrixContent;
                        projectDetail.style.webkitTransform = matrixContent;
                        // $('#project-detail').css('-webkit-transform', "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -186.5, 1)")
                        projectDetail.style.mozTransform = matrixContent;
                        projectDetail.style.msTransform = matrixContent;

                        this.replaceArrValues(stepTwoFaceThree,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                        setTimeout(function(){
                            projectDetail.style.transform = matrixContent;
                            projectDetail.style.webkitTransform = matrixContent;
                            // $('#project-detail').css('-webkit-transform', "matrix3d(-0.6,0,-9.79717439317883e-17,0,0,0.6,0,0,9.79717439317883e-17,0,-0.6,0,0,0, -186.5, 1)")
                            projectDetail.style.mozTransform = matrixContent;
                            projectDetail.style.msTransform = matrixContent;
                        },450);
                        break;
                    case 4:
                        this.replaceArrValues(stepOneFaceFour,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                        projectDetail.style.transform = matrixContent;
                        projectDetail.style.webkitTransform = matrixContent;
                        // $('#project-detail').css('-webkit-transform', "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -186.5, 1)")
                        projectDetail.style.mozTransform = matrixContent;
                        projectDetail.style.msTransform = matrixContent;

                        this.replaceArrValues(stepTwoFaceFour,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                        setTimeout(function(){
                            projectDetail.style.transform = matrixContent;
                            projectDetail.style.webkitTransform = matrixContent;
                            // $('#project-detail').css('-webkit-transform', "matrix3d(-0.6,0,-9.79717439317883e-17,0,0,0.6,0,0,9.79717439317883e-17,0,-0.6,0,0,0, -186.5, 1)")
                            projectDetail.style.mozTransform = matrixContent;
                            projectDetail.style.msTransform = matrixContent;
                        },450);
                        break;
                };
            },

            rotateToFaceProSpecs : function(face){


                var projectSpects = document.getElementsByClassName('project-spects')[0];
                var matrixContent = projectSpects.style.transform;

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

                        projectSpects.style.transform = matrixContent;
                        projectSpects.style.webkitTransform = matrixContent;
                        projectSpects.style.mozTransform = matrixContent;
                        projectSpects.style.msTransform = matrixContent;

                        this.replaceArrValues(stepTwoFaceOne,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                        setTimeout(function(){
                            projectSpects.style.transform = matrixContent},450);
                            projectSpects.style.webkitTransform = matrixContent;
                            projectSpects.style.mozTransform = matrixContent;
                            projectSpects.style.msTransform = matrixContent;

                        break;
                    case 2:
                        this.replaceArrValues(stepOneFaceTwo,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";

                        projectSpects.style.transform = matrixContent;
                        projectSpects.style.webkitTransform = matrixContent;
                        projectSpects.style.mozTransform = matrixContent;
                        projectSpects.style.msTransform = matrixContent;

                        this.replaceArrValues(stepTwoFaceTwo,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                        setTimeout(function(){
                            projectSpects.style.transform = matrixContent;
                            projectSpects.style.webkitTransform = matrixContent;
                            projectSpects.style.mozTransform = matrixContent;
                            projectSpects.style.msTransform = matrixContent;
                        },450);
                        break;
                    case 3:
                        this.replaceArrValues(stepOneFaceThree,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";

                        projectSpects.style.transform = matrixContent;
                        projectSpects.style.webkitTransform = matrixContent;
                        projectSpects.style.mozTransform = matrixContent;
                        projectSpects.style.msTransform = matrixContent;

                        this.replaceArrValues(stepTwoFaceThree,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                        setTimeout(function(){
                            projectSpects.style.transform = matrixContent;
                            projectSpects.style.webkitTransform = matrixContent;
                            projectSpects.style.mozTransform = matrixContent;
                            projectSpects.style.msTransform = matrixContent;
                        },450);
                        break;
                    case 4:
                        this.replaceArrValues(stepOneFaceFour,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";

                        projectSpects.style.transform = matrixContent;
                        projectSpects.style.webkitTransform = matrixContent;
                        projectSpects.style.mozTransform = matrixContent;
                        projectSpects.style.msTransform = matrixContent;

                        this.replaceArrValues(stepTwoFaceFour,matrixArr);
                        matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                        setTimeout(function(){
                            projectSpects.style.transform = matrixContent;
                            projectSpects.style.webkitTransform = matrixContent;
                            projectSpects.style.mozTransform = matrixContent;
                            projectSpects.style.msTransform = matrixContent;
                        },450);
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

                this["face" + face].main.empty();
                this["face" + face].detail.empty();
                this["face" + face].spect.empty();

                this["face" + face].main.loadTemplate($("#project-main-view-template"), projectInfo[project-1]);

                this["face" + face].detail.loadTemplate($("#projects-description-template"), projectInfo[project-1]);

                this["face" + face].spect.loadTemplate($("#project-spects-template-" + project), projectInfo[project-1]);

            },

            updateButtonsStyles : function(projectNum){
              $('.switch.proj').each(function(){
                  if($(this).attr("id") != projectNum){
                    if(!$(this).hasClass("ready")){
                      $(this).toggleClass("ready");
                    }
                  }
              });
              $("#p"+projectNum).removeClass("ready");
            }
        }

        var slider = {

            rotateSliderToFace : function(face) {

                requestAnimFrame(function(){sliderFunctions.rotateToFaceMainBox(face)});
                requestAnimFrame(function(){sliderFunctions.rotateToFaceProDetail(face)});
                requestAnimFrame(function(){sliderFunctions.rotateToFaceProSpecs(face)});
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
                        sliderFunctions.updateButtonsStyles(projectNum);
                        sliderFunctions.flagSlider = true;
                      },700);
                    } else {
                      this.rotateSliderToFace(targetFace - 1);
                      sliderFunctions.updateButtonsStyles(projectNum);
                      sliderFunctions.updateProjectFace(targetFace,projectNum);
                      setTimeout(function(){
                        slider.rotateSliderToFace(targetFace);
                        sliderFunctions.flagSlider = true;
                      },700);
                    }
                } else {
                  sliderFunctions.updateButtonsStyles(projectNum);
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

            play : function(delay,immidiateChange) {

              if(sliderFunctions.timeOutReference){
                slider.pause();
              }
              if(immidiateChange){
                slider.showNextProject();
              }
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
              if($(this).hasClass("ready")){
                if(sliderFunctions.timeOutReference){
                  slider.pause();
                }
                slider.showProject($(this).index()+1);
                if($(".switch.ctr.pause").hasClass("ready")){
                  slider.play(2000,false);
                }
              }
            }

            // if(sliderFunctions.flagSlider){
            //   var that = this;
            //   $('.switch.proj').each(function(){
            //     if($(this).index() != $(that).index() && !$(this).hasClass("ready")){
            //       $(this).toggleClass("ready");
            //     }
            //   });
            //   if($(this).hasClass("ready")){
            //     $(this).removeClass("ready");
            //     slider.showProject($(this).index()+1);
            //   }
            // }

          });

          // logic to play/stop the slider

          $(".switch.ctr").bind("click",function(){

            if($(this).hasClass("ready")){
              $(this).removeClass("ready");

              if($(this).hasClass("play")){
                $(".switch.ctr.pause").toggleClass("ready");
                slider.play(2000,true);
              } else {
                $(".switch.ctr.play").toggleClass("ready");
                slider.pause();
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

          //initializing slider

          slider.play(2000,true);

        });

      //*****************************************************
      //**************    knowledge slider    ***************
      //*****************************************************

      Notes:
      // var matrixVal =  "matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, -200, 1)"

      var classes = ["left-up","right-up","center","left-donw","right-donw"];

      var panelElements = [];

      panelElements.push($("#software-ing.know-container"));
      panelElements.push($("#design.know-container"));
      panelElements.push($("#code.know-container"));
      panelElements.push($("#soft.know-container"));
      panelElements.push($("#finance.know-container"));

      var panelStyles = [
        // .left-up
        {
          "z-index": "2",
          "transform": "translate3D(-33%,-17%,-200px) scale3d(.5,.5,1)",
          "-webkit-transform": "translate3D(-33%,-17%,-200px) scale3d(.5,.5,1)",
          "-moz-transform": "translate3D(-33%,-17%,-200px) scale3d(.5,.5,1)",
          "-ms-transform": "translate3D(-33%,-17%,-200px) scale3d(.5,.5,1)"

        },
        // .right-up
        {
          "z-index": "2",
          "transform": "translate3D(66.5%,-17%,-200px) scale3d(.5,.5,1)",
          "-webkit-transform": "translate3D(66.5%,-17%,-200px) scale3d(.5,.5,1)",
          "-moz-transform": "translate3D(66.5%,-17%,-200px) scale3d(.5,.5,1)",
          "-ms-transform": "translate3D(66.5%,-17%,-200px) scale3d(.5,.5,1)"
        },
        // .center
        {
          "z-index": "3",
          "transform": "translate3D(16.5%,30%,0) scale3d(1,1,1)",
          "-webkit-transform": "translate3D(16.5%,30%,0) scale3d(1,1,1)",
          "-ms-transform": "translate3D(16.5%,30%,0) scale3d(1,1,1)",
          "-moz-transform": "translate3D(16.5%,30%,0) scale3d(1,1,1)"
        },
        // .left-donw
        {
          "z-index": "2",
          "transform": "translate3D(-33%,66.5%,-200px) scale3d(.5,.5,1)",
          "-webkit-transform": "translate3D(-33%,66.5%,-200px) scale3d(.5,.5,1)",
          "-moz-transform": "translate3D(-33%,66.5%,-200px) scale3d(.5,.5,1)",
          "-ms-transform": "translate3D(-33%,66.5%,-200px) scale3d(.5,.5,1)"
        },
        // .right-donw
        {
          "z-index": "2",
          "transform": "translate3D(66.5%,67%,-200px) scale3d(.5,.5,1)",
          "-webkit-transform": "translate3D(66.5%,67%,-200px) scale3d(.5,.5,1)",
          "-moz-transform": "translate3D(66.5%,67%,-200px) scale3d(.5,.5,1)",
          "-ms-transform": "translate3D(66.5%,67%,-200px) scale3d(.5,.5,1)"
        }
      ];

      rotateArray = function(arr,direction){
        var aux = [];
        if(direction=="prev"){
          aux.push(arr[0]);
          arr =  arr.slice(1,arr.length).concat(aux);
        } else {
          aux.push(arr[arr.length -1]);
          arr = aux.concat(arr.slice(0,arr.length -1));
        }
        return arr;
      };

      applyStylesPanels = function(elementsArr,stylesArr){
        for(var i in elementsArr){
          elementsArr[i].css(stylesArr[i]);
        }
      };

      initializePanels = function(){
        requestAnimFrame(function(){applyStylesPanels(panelElements,panelStyles)});
      };

      updateCardControl = function (direction) {

        var activeTag = 1;

        $('.panel-stitcher').each(function () {
          if ($(this).hasClass('active')) {
            activeTag = parseInt( $(this).attr('id') );
          }
          $(this).removeClass('active');
        })

        if (direction == 'prev') {
          activeTag = (activeTag > 1 ? (activeTag - 1) : 5);
        } else {
          activeTag = (activeTag < 5 ? (activeTag + 1) : 1);
        }

        $(".panel-stitcher[id=" + activeTag + "]").addClass("active");

      };

      changePanel = function(direction){
        panelStyles = rotateArray(panelStyles,direction);
        updateCardControl(direction);
        requestAnimFrame(function(){applyStylesPanels(panelElements,panelStyles)});
      };

      var knowSlider = {
        changePanel : function(direction){
          changePanel(direction);
        },
        goToSpecificPanel : function(panel){
          // goToSpecificPanel(panel);

          var objectivePanel = -1;
          switch(panel){
            case "software-ing":
              objectivePanel = 0;
              break;
            case "design":
              objectivePanel = 1;
              break;
            case "code":
              objectivePanel = 2;
              break;
            case "soft":
              objectivePanel = 3;
              break;
            case "finance":
              objectivePanel = 4;
              break;
          };
          if(objectivePanel > -1){
            while(true){
              panelStyles = rotateArray(panelStyles);
              if(panelStyles[objectivePanel]["z-index"] == "3"){
                break;
              }
            }
            applyStylesPanels(panelElements,panelStyles);
          }

        },

        timer : {},

        changeState : function(){
          if(this.timer){
            clearInterval(this.timer);
            this.timer = undefined;
          } else {
            window.knowSlider.changePanel();
            this.timer = setInterval(function() {
                window.knowSlider.changePanel();
            },3000);
          }
        }

      };
      initializePanels();
      window.knowSlider = knowSlider;

      // initializing knowledge slider functions

      $(document).ready(function(){

        window.knowSlider.timer = setInterval(function() {
                window.knowSlider.changePanel();
        },3000);

        $(".panel-stitcher").on("click",function(){
          window.knowSlider.goToSpecificPanel($(this).attr("title"));
          $(".panel-stitcher").each(function(){
            $(this).removeClass('active');
          });
          $(this).addClass('active');
        });

        $(".panel-control").on("click",function(){
          switch($(this).attr("title")){
            case "prev":
              window.knowSlider.changePanel("prev");
              break;
            case "change":
              window.knowSlider.changeState();
              if ($(this).hasClass('flaticon-pause47')) {
                $(this).removeClass('flaticon-pause47');
                $(this).addClass('flaticon-play87')
              } else {
                $(this).removeClass('flaticon-play87');
                $(this).addClass('flaticon-pause47')
              }
              break;
            case "next":
              window.knowSlider.changePanel("next");
              break;
          };
        });

      });

});

})();










