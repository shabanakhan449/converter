function lengthConverter(e){
    var a = document.getElementById("kilometer");
    
    // kilometer to meter
    var k_m = a.value*1000;
    document.getElementById("meter").value = Math.round(k_m);
    
    //kilometer to centimeter
    var k_cm = a.value / 100000;
    document.getElementById("centimeter").value = Math.round(k_cm);
    
    //kilometer to millimeter
    var k_mm = a.value/0.0000010000
    document.getElementById("millimeter").value = Math.round(k_mm);
    }
    
    function lengConverter(e){
        var b = document.getElementById("meter");
        // meter to kilometer
        var m_k = b.value /1000;
        document.getElementById("kilometer").value = Math.round(m_k)
        // meter to centimeter
        var m_cm = b.value*100;
        document.getElementById("centimeter").value = Math.round(m_cm);
        // meter to millimeter
        var m_mm = b.value*1000;
        document.getElementById("millimeter").value = Math.round(m_mm);
    
    }
    
    function lengthConvert(e){
       var c = document.getElementById("centimeter");
       // centimeter to kilometer
       var cm_k = c.value/100000;
       document.getElementById("kilometer").value = Math.round(cm_k)
       // centimeter to meter
       var cm_m = c.value /100;
       document.getElementById("meter").value = Math.round(cm_m)
       // centimeter to millimeter
       var cm_mm = c.value/10;
       document.getElementById("millimeter").value = Math.round(cm_mm)
    }
    function lengConvert(e){
        var d = document.getElementById("millimeter");

        // millimeter to kilometer
        var mm_k = d.value/1000000;
        document.getElementById("kilometer").value = Math.round(mm_k)

        // millimeter to meter
        var mm_m = d.value / 1000;
        document.getElementById("meter").value = Math.round(mm_m)

        // millimeter to centimeter
        var mm_cm = d.value / 10;
        document.getElementById("centimeter").value = Math.round(mm_cm)    
    }