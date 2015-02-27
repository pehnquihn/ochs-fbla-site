

function unhide(divID) {
    var item = document.getElementById(divID);
    if (item) {
        item.className=(item.className=='hidden')?'unhidden':'hidden';
    }
}

function hideAll() {     
    var divs = document.getElementsByTagName('div');     
    for(var i = divs.length; i-- ;) {         
        var div = divs[i];         
        if(div.className == 'unhidden') {             
            div.className ='hidden';   
        }     
    }
}
                

function testSelect(form) {

	$('#pic').show();
	
	if(form.list.selectedIndex == 0) {
		if(form.list2.selectedIndex == 0){
			$('#pic').html("<table><tr><td><a href='products/road/raleigh_revenio_1.html#top'><IMG SRC='img/product/road/3.jpg' width='150px' height='150px'><br />Raleigh 2014 Revenio 1 Road Race Bike<center style='color:#E41F29;'>$679.99</center></a></td><td><a href='products/road/specialized_allez_base.html#top'><IMG SRC='img/product/road/4.jpg' width='150px' height='150px'><br />Specialized 2014 Allez Base Road Race Bike<center style='color:#E41F29;'>$769.99</center></a></td><td> <a href='products/road/raleigh_revenio_3.html#top'><IMG SRC='img/product/road/5.jpg' width='150px' height='150px'><br />Raleigh 2014 Revenio 3.0 Road Race Bike<center style='color:#E41F29;'>$999.99</center></a></td></tr></table>")
		}
		if(form.list2.selectedIndex == 1){
			$('#pic').html("<table><tr><td> <a href='products/road/raleigh_revenio_carbon_1.html#top'><IMG SRC='img/product/road/1.jpg' width='150px' height='150px'><br />Raleigh 2014 Revenio Carbon 1 Road Race Bike<center style='color:#E41F29;'>$1,699.99</center></a></td><td> <a href='products/cyclocross/specialized_diverge_elite.html#top'><IMG SRC='img/product/cyc/3.jpg' width='150px' height='150px'><br />Specialized 2015 Diverge Elite Cyclocross Race Bike<center style='color:#E41F29;'>$1,399.99</center></a></td><td> <a href='products/cyclocross/raleigh_tamland_1.html#top'><IMG SRC='img/product/cyc/6.jpg' width='150px' height='150px'><br />Raleigh 2015 Tamland 1 Cyclocross Bike<center style='color:#E41F29;'>$1,774.99</center></a></td></tr></table>")
		}
		if(form.list2.selectedIndex == 2){
			$('#pic').html("<table><tr><td> <a href='products/road/specialized_roubaix_comp.html#top'><IMG SRC='img/product/road/2.jpg' width='150px' height='150px'><br />Specialized 2014 Roubaix Comp Road Race Bike<center style='color:#E41F29;'>$2,599.99</center></a></td><td> <a href='products/road/specialized_roubaix_expert.html#top'><IMG SRC='img/product/road/6.jpg' width='150px' height='150px'><br />Specialized 2014 Roubaix Expert Road Race Bike<center style='color:#E41F29;'>$3,199.99</center></a></td><td> <a href='products/cyclocross/specialized_crux_elite.html#top'><IMG SRC='img/product/cyc/1.jpg' width='150px height='150px'><br />Specialized 2014 Crux Elite Rival Disc Cyclocross Bike<center style='color:#E41F29;'>$2,999.99</center></a></td></tr></table>")
		}
	}
	if(form.list.selectedIndex == 1) {
		if(form.list2.selectedIndex == 3){
			$('#pic').html("<table><tr><td><img src='children.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
		if(form.list2.selectedIndex == 2){
			$('#pic').html("<table><tr><td><img src='cyclocross.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
		if(form.list2.selectedIndex == 1){
			$('#pic').html("<table><tr><td><img src='e-bike.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
		if(form.list2.selectedIndex == 0){
			$('#pic').html("<table><tr><td><img src='foldingbike.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
	}
	if(form.list.selectedIndex == 2) {
		if(form.list2.selectedIndex == 1){
			$('#pic').html("<table><tr><td><img src='children.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
		if(form.list2.selectedIndex == 2){
			$('#pic').html("<table><tr><td><img src='cyclocross.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
		if(form.list2.selectedIndex == 3){
			$('#pic').html("<table><tr><td><img src='e-bike.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
		if(form.list2.selectedIndex == 0){
			$('#pic').html("<table><tr><td><img src='foldingbike.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
	}
	if(form.list.selectedIndex == 3) {
		if(form.list2.selectedIndex == 2){
			$('#pic').html("<table><tr><td><img src='children.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
		if(form.list2.selectedIndex == 3){
			$('#pic').html("<table><tr><td><img src='cyclocross.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
		if(form.list2.selectedIndex == 0){
			$('#pic').html("<table><tr><td><img src='e-bike.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
		if(form.list2.selectedIndex == 1){
			$('#pic').html("<table><tr><td><img src='foldingbike.jpg' width='150px;' height='150px'><p>name of bike</p></td></tr></table>")
		}
	}
}