(function(){
    //*************************************************************
    // function to rotate the slider
    //*************************************************************

    // function to rotate the main box

    // Notes
    // 3d matrix with 0 rotation:
    // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -245, 1)
    // 3d matrix with 90 rotation:
    // matrix3d(1, 0, 0, 0, 0, 6.12323399573677e-17, -1, 0, 0, 1, 6.12323399573677e-17, 0, 0, 0, -245, 1)
    // 3d matrix with 180 rotation:
    // matrix3d(1, 0, 0, 0, 0, -1, -1.22464679914735e-16, 0, 0, 1.22464679914735e-16, -1, 0, 0, 0, -245, 1)
    // 3d matrix with 270 rotation:
    // matrix3d(1, 0, 0, 0, 0, -1.83697019872103e-16, 1, 0, 0, -1, -1.83697019872103e-16, 0, 0, 0, -245, 1)



    var sliderFunctions = {

        replaceArrValues : function(numArr, strArr){
            for(var i in numArr){
                strArr[i] = String(numArr[i]);
            }
            return strArr;
        },

        rotateToFaceMainBox : function(face){

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
            stepOneFaceOne = [0.8, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 0.8, 0, 0, 0];
            stepTwoFaceOne = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0];

            // face 2
            stepOneFaceTwo =[4.89858719658941e-17, 0, -0.8, 0, 0, 0.8, 0, 0, 0.8, 0, 4.89858719658941e-17, 0, 0, 0];
            stepTwoFaceTwo =[6.12323399573677e-17, 0, -1, 0, 0, 1, 0, 0, 1, 0, 6.12323399573677e-17, 0, 0, 0];

            // face 3
            stepOneFaceThree =[-0.8, 0, -9.79717439317883e-17, 0, 0, 0.8, 0, 0, 9.79717439317883e-17, 0, -0.8, 0, 0, ];
            stepTwoFaceThree =[-1, 0, -1.22464679914735e-16, 0, 0, 1, 0, 0, 1.22464679914735e-16, 0, -1, 0, 0, 0];

            // face 4
            stepOneFaceFour =[-1.46957615897682e-16, 0, 0.8, 0, 0, 0.8, 0, 0, -0.8, 0, -1.46957615897682e-16, 0, 0, 0];
            stepTwoFaceFour =[-1.83697019872103e-16, 0, 1, 0, 0, 1, 0, 0, -1, 0, -1.83697019872103e-16, 0, 0, 0];

            switch (face){
                case 1:
                    this.replaceArrValues(stepOneFaceOne,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-detail').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceOne,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-detail').css('transform',matrixContent)},500);
                    break;
                case 2:
                    this.replaceArrValues(stepOneFaceTwo,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-detail').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceTwo,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-detail').css('transform',matrixContent)},500);
                    break;
                case 3:
                    this.replaceArrValues(stepOneFaceThree,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-detail').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceThree,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-detail').css('transform',matrixContent)},500);
                    break;
                case 4:
                    this.replaceArrValues(stepOneFaceFour,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-detail').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceFour,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-detail').css('transform',matrixContent)},500);
                    break;
            };
        },

        rotateToFaceProSpecs : function(face){


            var matrixContent = $('.project-spects').css('transform');
            var matrixArr = matrixContent.substr(9,matrixContent.length-10).split(",");

            // face 1
            stepOneFaceOne = [0.8, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 0.8, 0, 0, 0];
            stepTwoFaceOne = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0];

            // face 4
            stepOneFaceTwo =[-1.46957615897682e-16, 0, 0.8, 0, 0, 0.8, 0, 0, -0.8, 0, -1.46957615897682e-16, 0, 0, 0];
            stepTwoFaceTwo =[-1.83697019872103e-16, 0, 1, 0, 0, 1, 0, 0, -1, 0, -1.83697019872103e-16, 0, 0, 0];
            // face 3
            stepOneFaceThree =[-0.8, 0, -9.79717439317883e-17, 0, 0, 0.8, 0, 0, 9.79717439317883e-17, 0, -0.8, 0, 0, ];
            stepTwoFaceThree =[-1, 0, -1.22464679914735e-16, 0, 0, 1, 0, 0, 1.22464679914735e-16, 0, -1, 0, 0, 0];

            // face 2
            stepOneFaceFour =[4.89858719658941e-17, 0, -0.8, 0, 0, 0.8, 0, 0, 0.8, 0, 4.89858719658941e-17, 0, 0, 0];
            stepTwoFaceFour =[6.12323399573677e-17, 0, -1, 0, 0, 1, 0, 0, 1, 0, 6.12323399573677e-17, 0, 0, 0];


            switch (face){
                case 1:
                    this.replaceArrValues(stepOneFaceOne,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-spects').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceOne,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-spects').css('transform',matrixContent)},500);
                    break;
                case 2:
                    this.replaceArrValues(stepOneFaceTwo,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-spects').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceTwo,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-spects').css('transform',matrixContent)},500);
                    break;
                case 3:
                    this.replaceArrValues(stepOneFaceThree,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-spects').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceThree,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-spects').css('transform',matrixContent)},500);
                    break;
                case 4:
                    this.replaceArrValues(stepOneFaceFour,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    $('.project-spects').css('transform',matrixContent);
                    this.replaceArrValues(stepTwoFaceFour,matrixArr);
                    matrixContent = "matrix3d(" + matrixArr.join(",") + ")";
                    setTimeout(function(){$('.project-spects').css('transform',matrixContent)},500);
                    break;
            };
        }
    }

    var slider = {

        rotateSliderToFace : function(face) {

            sliderFunctions.rotateToFaceMainBox(face);
            sliderFunctions.rotateToFaceProDetail(face);
            sliderFunctions.rotateToFaceProSpecs(face)
        }
    }

    window.slider = slider;
})();