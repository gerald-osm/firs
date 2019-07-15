import $ from 'jquery';

$(document).ready(function(){

    $('.form_input_container label').click(function(){

        $(this).removeClass('form_label').addClass('input_label_transition');

        $(this).siblings('.input-group').find('input').focus();

    })

    $('.form_input_container_pays label').click(function(){

        $(this).removeClass('form_label').addClass('input_label_transition');

        $(this).siblings('.input-group').find('input').focus();

    })

    $('.custom_input_group .form-control').focus(function(){

        $(this).parent().siblings('label').removeClass('form_label').addClass('input_label_transition');
        
    })

    $('.bar_container').click(function(){

        $('.dash_head_service').slideToggle(500);

        $('.bar_container:nth-child(2)').toggleClass('display_none');
    })

    // var $windowWidth = $(window)

    // if($())

    // -----------------------------
    //     MAIN SERVICES CLICK FUNCTION
    // ----------------------------

    $('#airtime').click(function(){

        $("[id*='Form_s']").not("#airtimeForm_s").slideUp(100);

        $("#airtimeForm_s").delay(100).slideToggle(); 
})

    $('#bills').click(function(){

            $("[id*='Form_s']").not("#billsForm_s").slideUp(100);

            $("#billsForm_s").delay(100).slideToggle(); 
    })

    $('#flight').click(function(){

            $("[id*='Form_s']").not("#flightForm_s").slideUp(100);

            $("#flightForm_s").delay(100).slideToggle();   
        
    })
    
    $('#hotel').click(function(){
        
        $("[id*='Form_s']").not("#hotelForm_s").slideUp(100);
        
        $("#hotelForm_s").delay(100).slideToggle();
    
})

// ----------------------------------------------
//      END OF  MAIN SERVICES CLICK FUNCTION
// ----------------------------------------------

// ---------------------------------------------
//      BILLS SERVICES CLICK FUNCTION
// ---------------------------------------------


    $('#cable').click(function(){

        $("#bills_services").fadeOut(300);
        $(".cable_bill_form").delay(300).fadeIn();

    })

    $("#back_btn").click(function(){

        $(".cable_bill_form").fadeOut(300);
        $("#bills_services").delay(300).fadeIn();  

    })

// ---------------------------------------------
//      END OF BILLS SERVICES CLICK FUNCTION
// ---------------------------------------------





})