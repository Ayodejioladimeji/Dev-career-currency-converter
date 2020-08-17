// DECLARING A FUNCTION
$(document).ready(function(){
    $("#add").click(function(){
        $("#add-currency").fadeIn();
    });
    $("#back").click(function(){
        $("#add-currency").fadeOut();
    });
});


// THE SECTION OF THE DARK MODE

$(document).ready(function(){
    $("#off").click(function(){
        $(this).toggleClass("fa-toggle-on");

        if($("body").hasClass("dark")){
            $("body").removeClass("dark");
            $("#off").css("color", "#ffffff");
        }
        else{
            $("body").addClass("dark");
            $("#off").css("color", "#00ff00");
        }



        // THE SECTION OF THE HEADER
        if($(".header").hasClass("dark")){
            $(".header").removeClass("dark");
            $(".header").css("background", "#02B78B");
        }
        else{
            $(".header").addClass("dark");
            $(".header").css("background", "#1d2a3a");
        }


        if($("section").hasClass("dark")){
            $("section").removeClass("dark");
            $("section").css("background", "#ffffff");
        }
        else{
            $("section").addClass("dark");
            $("section").css("background", "#141d26");
        }


            // THE SECTION OF THE MAIN
        if($("main").hasClass("dark")){
            $("main").removeClass("dark");
            $("main").css("background", "#ffffff");
        }
        else{
            $("main").addClass("dark");
            $("main").css("background", "#141d26");
        }



           // THE SECTION OF THE FOOTER
        if($("footer").hasClass("dark")){
            $("footer").removeClass("dark");
            $("footer").css("background", "#ffffff");
        }
        else{
            $("footer").addClass("dark");
            $("footer").css("background", "#141d26");
        }



          // THE SECTION OF THE CURRENCIES
        if($("ul.currencies li").hasClass("dark")){
            $("ul.currencies li").removeClass("dark");
            $("ul.currencies li").css("background", "rgb(245, 244, 244)");
        }
        else{
            $("ul.currencies li").addClass("dark");
            $("ul.currencies li").css("background", "#243447");
        }



        // if($("ul.currencies li.base-currency").hasClass("dark")){
        //     $("ul.currencies li.base-currency").removeClass("dark");
        //     $("ul.currencies li.base-currency").css("background", "#02b78b54");
        // }
        // else{
        //     $("ul.currencies li.base-currency").addClass("dark");
        //     // $("ul.currencies li.base-currency").css("background", "#02b78b54");
        // }




          // THE SECTION OF THE INPUT
          if($(".info input").hasClass("dark")){
            $(".info input").removeClass("dark");
            $(".info input").css("background", "rgb(236, 234, 234)");
        }
        else{
            $(".info input").addClass("dark");
            $(".info input").css("background", "#141d26");
        }



        // =================================================
        // THE SECTION OF THE ADD CURRENCIES

        // THE SECTION OF THE UL
        if($("ul.add-currency-list").hasClass("dark")){
            $("ul.add-currency-list").removeClass("dark");
            $("ul.add-currency-list").css("background", "#02B78B");
        }
        else{
            $("ul.add-currency-list").addClass("dark");
            $("ul.add-currency-list").css("background", "#141d26");
        }



        // THE SECTION OF THE .FOOTER
        if($(".footer").hasClass("dark")){
            $(".footer").removeClass("dark");
            $(".footer").css("background", "#02B78B");
        }
        else{
            $(".footer").addClass("dark");
            $(".footer").css("background", "#141d26");
        }




        // THE SECTION OF THE .ul.add-currency-list li
        if($("ul.add-currency-list li").hasClass("dark")){
            $("ul.add-currency-list li").removeClass("dark");
            $("ul.add-currency-list li").css("background", "#FCFDFF");
        }
        else{
            $("ul.add-currency-list li").addClass("dark");
            $("ul.add-currency-list li").css("background", "#243447");
        }



    });
    
});