//lhz
// create 2018-02-07
(function(){
    SlideHdp =  function(elem, option){
    var defaultOpt = {tranX: 60, opacity:0.6,current:0, scale:0.8, sens:3,touch:true, mouse:true,btnshow:true, nextElem: $('.nextbtn'), prevElem:$('.prevbtn'), }
    var hdp_nextbtnStyle = 'position: absolute;top: 100px;color: #fff;font-family: "宋体";font-size: 30px; background: rgba(0, 0, 0, 0.4);padding: 10px;cursor: pointer;z-index: 99;left: -60px;';
    var hdp_prevbtnStyle = 'position: absolute;top: 100px;color: #fff; font-family: "宋体";font-size: 30px; background: rgba(0, 0, 0, 0.4);padding: 10px;cursor: pointer;z-index: 99;right: -60px;';
    for(var key in option){
        defaultOpt[key] = option[key];
    }
    this.elem = $(elem);
    this.elemP = $(elem).parent();
    this.opt = defaultOpt;
    this.newOpt = option;
    this.getCurrent = function(){
        return $(".hdp_silde_one").index();
    }
    var self = this;
    this.elem.children().addClass('hdp_silde_box')
    var width= 250;
    var leftX = self.opt.tranX;
    var mopt = 1 - self.opt.opacity;
    var ms = 1 - self.opt.scale;;
    var maxs = 1;
    var onex = self.opt.sens;
    var nextbtn = self.opt.nextbtn;
    var prevbtn = self.opt.prevbtn;
    var data = {
        one:{x:0, s:0, opt:0, },
        two:{x:0, s:0, opt:0,},
        the:{x:0, s:0, opt:0, },
        four:{x:0, s:0, opt:0, }
    }
    var elemA = [];
    var startData =  $.extend(true,{}, data);
    var overData = {
        one:{x:0, s:maxs, opt:1, },  
        two:{x:-leftX, s:(maxs - ms), opt:(1 - mopt),},
        the:{x:leftX, s:(maxs - ms), opt:(1 - mopt), },
        four:{x:0, s:(maxs - ms*2), opt:0, }
    }
    var childLength = self.elem.children().length;
    function initElem(){
        self.elem.children().eq(self.opt.current).addClass("hdp_silde_one hdp_act");
        if(self.elem.children().eq(self.opt.current).next('.hdp_silde_box').length>0){
            self.elem.children().eq(self.opt.current).next('.hdp_silde_box').addClass("hdp_silde_the hdp_act");
        }else{
            self.elem.children('.hdp_silde_box').first().addClass("hdp_silde_the hdp_act");
        }
        if(self.elem.children().eq(self.opt.current).prev('.hdp_silde_box').length>0){
            self.elem.children().eq(self.opt.current).prev('.hdp_silde_box').addClass("hdp_silde_two hdp_act");
        }else{
            self.elem.children('.hdp_silde_box').last().addClass("hdp_silde_two hdp_act");
        }
    }
    if(childLength >= 4){
        initElem();
    }else if(childLength < 4){
        for (var i = 0; i < 6 - childLength; i++) {
            self.elem.append(self.elem.children().eq(i)[0].outerHTML)
        }
        initElem();
        
    }
    if(self.opt.mouse){
        initPcEvent()
    }
    if(self.opt.touch){
        initAndEvent()
    }
    if(self.opt.btnshow){
        if(!self.newOpt.nextElem && self.newOpt.btnshow){
            self.elem.append("<div style='"+hdp_nextbtnStyle+"' class='_hdp_nextbtn btn'><</div>")
        }
        if(!self.newOpt.prevElem && self.newOpt.btnshow){
            self.elem.append("<div style='"+hdp_prevbtnStyle+"' class='_hdp_prevbtn btn'>></div>")
        }
    }
    this.prevPage = function (){
         elemA = [];
         $(".hdp_silde_box").css('transition','all 0.3s ease-out');
        elemA.push($(".hdp_silde_two"));
        if($(".hdp_silde_two").prev('.hdp_silde_box').length > 0){
            elemA.push($(".hdp_silde_two").prev('.hdp_silde_box'));
        }else{
            elemA.push($(".hdp_silde_box").last());
        }
        if($(".hdp_silde_two").next('.hdp_silde_box').length > 0){
           elemA.push($(".hdp_silde_two").next('.hdp_silde_box'));
        }else{
            elemA.push($(".hdp_silde_box").eq(0));
        }
        elemA.push($(".hdp_silde_the").eq(0));

        elemA[2].removeClass("hdp_silde_one hdp_silde_two").addClass('hdp_silde_the hdp_act');
        elemA[0].removeClass("hdp_silde_two hdp_silde_the").addClass("hdp_silde_one hdp_act")
        elemA[1].removeClass("hdp_silde_one hdp_silde_the").addClass("hdp_silde_two hdp_act")
        elemA[3].removeClass("hdp_silde_one hdp_silde_two hdp_silde_the hdp_act")
        var len = elemA.length;
        var k = 0;
       for(var key in overData){
            elemA[k].css({
                transform:'translateX('+overData[key].x+'px) scale('+overData[key].s+')', 
                opacity:overData[key].opt
            })
            k++;
       }
       data = $.extend(true,{}, startData);
       $('.hdp_silde_box').css('z-index', 2)
        $(".hdp_silde_one").css('z-index', 10)
    }
    this.nextPage = function (){
         elemA = [];
         $(".hdp_silde_box").css('transition','all 0.3s ease-out');
        elemA.push($(".hdp_silde_the"));
        if($(".hdp_silde_the").prev('.hdp_silde_box').length > 0){
           elemA.push($(".hdp_silde_the").prev('.hdp_silde_box'));
        }else{
            elemA.push($(".hdp_silde_box").last());
        }
        if($(".hdp_silde_the").next('.hdp_silde_box').length > 0){
            elemA.push($(".hdp_silde_the").next('.hdp_silde_box'));
        }else{
            elemA.push($(".hdp_silde_box").first());
        }
        elemA.push($(".hdp_silde_two").eq(0));
        elemA[2].removeClass("hdp_silde_one hdp_silde_two").addClass('hdp_silde_the hdp_act');
        elemA[0].removeClass("hdp_silde_two hdp_silde_the").addClass("hdp_silde_one hdp_act")
        elemA[1].removeClass("hdp_silde_one hdp_silde_the").addClass("hdp_silde_two hdp_act")
        elemA[3].removeClass("hdp_silde_one hdp_silde_two hdp_silde_the hdp_act")
        var len = elemA.length;
        var k = 0;
       for(var key in overData){
            elemA[k].css({
                transform:'translateX('+overData[key].x+'px) scale('+overData[key].s+')', 
                opacity:overData[key].opt
            })
            k++;
       }
       data = $.extend(true,{}, startData);
       $('.hdp_silde_box').css('z-index', 2)
        $(".hdp_silde_one").css('z-index', 10)
    }
    function initAndEvent(){
        self.elemP.on("touchstart", function(event){
            $(".hdp_silde_box").css('transition','all 0.01s ease-out');
            var startX = event.originalEvent.targetTouches[0].clientX;
            var startY = event.originalEvent.targetTouches[0].clientX;
            var fx = 'max';
            // $(".hdp_silde_box").addClass('hide')
            self.elemP.bind("touchmove", function(event){
                var moveX = event.originalEvent.targetTouches[0].clientX;
                if(moveX - startX > 0){
                    data.one.x+=onex;
                    if(data.one.x > leftX){
                        data.one.x = leftX;
                    }
                }else if(moveX - startX < -0){
                    data.one.x-=onex;
                    if(data.one.x < -leftX){
                        data.one.x = -leftX;
                    }
                }
                data.one.s = maxs - Math.abs(data.one.x)*((ms)/leftX)
                startX = moveX;
                move();
                event.stopPropagation();               
            })
            self.elemP.unbind("touchend")
            self.elemP.bind("touchend", function(event){
                self.elemP.unbind("touchmove")
                moveOver()
                event.stopPropagation();
            })
            event.stopPropagation();
        })
    }
    function initPcEvent(){
        self.elemP.on("mousedown", function(event){
            $(".hdp_silde_box").css('transition','all 0.01s ease-out');
            var startX = event.clientX;
            var startY = event.offsetY;
            var fx = 'max';
            // $(".hdp_silde_box").addClass('hide')
            self.elemP.bind("mousemove", function(event){
                var moveX = event.clientX;
                if(moveX - startX > 0){
                    data.one.x+=onex;
                    if(data.one.x > leftX){
                        data.one.x = leftX;
                    }
                }else if(moveX - startX < -0){
                    data.one.x-=onex;
                    if(data.one.x < -leftX){
                        data.one.x = -leftX;
                    }
                }
                data.one.s = maxs - Math.abs(data.one.x)*((ms)/leftX)
                startX = moveX;
                move();
            })
            self.elemP.unbind("mouseup")
            self.elemP.bind("mouseup", function(){
                self.elemP.unbind("mousemove")
                moveOver()
            })
        })
    }
    self.elem.on('click', '._hdp_nextbtn', function(event){
        self.nextPage();
        event.stopPropagation()
    });
     self.elem.on('click', '._hdp_prevbtn', function(event){
        self.prevPage();
        event.stopPropagation()
    })
    function move(){
        if(data.one.x > 0){
            data.one.opt = 1 - Math.abs(data.one.x)*((mopt)/leftX);
        }else{
            data.one.opt = 1- Math.abs(data.one.x)*((mopt)/leftX);
        }
        // var oneopt = 
        $(".hdp_silde_one").css({transform:'translateX('+data.one.x+'px) scale('+data.one.s+')', opacity:data.one.opt})

        if(-leftX-data.one.x < -leftX){
            data.two.x = -leftX+data.one.x
        }else{
            data.two.x = -leftX-data.one.x
        }
        if(data.one.x > 0){
            data.two.s = maxs - Math.abs(data.two.x)*((ms)/leftX)
            data.two.opt = 1 - Math.abs(data.two.x)*((mopt)/leftX);
        }else{
            data.two.s = (maxs - ms*2) + Math.abs(data.two.x)*((ms)/leftX);
            data.two.opt = 0 + Math.abs(data.two.x)*((1-mopt)/leftX);
        }
        
        $(".hdp_silde_two").css({transform:'translateX('+(data.two.x)+'px) scale('+data.two.s+')', opacity: data.two.opt})

        if(leftX+data.one.x > leftX){
            data.the.x = leftX-data.one.x;
            
        }else{
            data.the.x = leftX+data.one.x;
        }
        if(data.one.x < 0){
            data.the.s = maxs- Math.abs(data.the.x)*((ms)/leftX);
            data.the.opt = 1 - Math.abs(data.the.x)*((mopt)/leftX);
        }else{
            data.the.s = (maxs - ms*2)+ Math.abs(data.the.x)*((ms)/leftX)
            data.the.opt = 0 + Math.abs(data.the.x)*((1-mopt)/leftX);
        }
        $(".hdp_silde_the").css({transform:'translateX('+data.the.x+'px) scale('+data.the.s+')', opacity:data.the.opt})
        data.four.s = (maxs - ms)- Math.abs(data.the.x)*(ms/leftX);
        data.four.opt = (1 - mopt) - Math.abs(data.the.x)*(mopt/leftX);
        data.four.x = -data.one.x;

        if(data.one.x < 0){
            if($(".hdp_silde_the").next('.hdp_silde_box').length > 0){
                $(".hdp_silde_the").next('.hdp_silde_box').css({transform:'translateX('+data.four.x+'px) scale('+data.four.s+')', opacity:data.four.opt});
            }else{
                $(".hdp_silde_box").first().css({transform:'translateX('+data.four.x+'px) scale('+data.four.s+')', opacity:data.four.opt});
            }
        }else{
            if($(".hdp_silde_two").prev('.hdp_silde_box').length > 0){
                $(".hdp_silde_two").prev('.hdp_silde_box').css({transform:'translateX('+data.four.x+'px) scale('+data.four.s+')', opacity:data.four.opt});
            }else{
                $(".hdp_silde_box").last().css({transform:'translateX('+data.four.x+'px) scale('+data.four.s+')', opacity:data.four.opt});
            }
        }
        if(data.one.x >= leftX/2){
            $(".hdp_silde_box").css('z-index', 2)
            $(".hdp_act").css('z-index', 5);
            $(".hdp_silde_two").css('z-index', 10)
        }else if(data.one.x >-leftX/2 && data.one.x < leftX/2){
            $('.hdp_silde_box').css('z-index', 2)
            $(".hdp_act").css('z-index', 5);
            $(".hdp_silde_one").css('z-index', 10)
        }else{
            $(".hdp_silde_box").css('z-index', 2)
            $(".hdp_act").css('z-index', 5);
            $(".hdp_silde_the").css('z-index', 10)
            
        }
        if(data.one.x >= leftX || data.one.x <= -leftX){
            moveOver();
        }
    }
    function moveOver(){
        elemA = [];
        
        if(data.one.x >= leftX/2){
            
            self.prevPage();
        }else if(data.one.x <= -leftX/2){

            self.nextPage();
        }else{
            start();
        }
    }
    start();
    $(".hdp_silde_one").css('z-index', 10);
    $(".hdp_silde_two").css('z-index', 2)
    $(".hdp_silde_the").css('z-index', 2)
    function start(){
         elemA = [];
         $(".hdp_silde_box").css('transition','all 0.3s ease-out');
        elemA.push($(".hdp_silde_one"));
        elemA.push($(".hdp_silde_two"));
        elemA.push($(".hdp_silde_the"));
        if(data.one.x < 0){
            if($(".hdp_silde_the").next('.hdp_silde_box').length > 0){
                elemA.push($(".hdp_silde_the").next('.hdp_silde_box'));
            }else{
                elemA.push($(".hdp_silde_box").first());
            }
        } else{
            if($(".hdp_silde_two").prev('.hdp_silde_box').length > 0){
                elemA.push($(".hdp_silde_two").prev('.hdp_silde_box'));
            }else{
                elemA.push($(".hdp_silde_box").last());
            }
            
        }
        elemA[2].removeClass("hdp_silde_one hdp_silde_two").addClass('hdp_silde_the hdp_act');
        elemA[0].removeClass("hdp_silde_two hdp_silde_the").addClass("hdp_silde_one hdp_act")
        elemA[1].removeClass("hdp_silde_one hdp_silde_the").addClass("hdp_silde_two hdp_act")
        elemA[3].removeClass("hdp_silde_one hdp_silde_two hdp_silde_the hdp_act")
        var len = elemA.length;
        var k = 0;
       for(var key in overData){
            elemA[k].css({
                transform:'translateX('+overData[key].x+'px) scale('+overData[key].s+')', 
                opacity:overData[key].opt
            })
            k++;
       }
       data = $.extend(true,{}, startData);
        $('.hdp_silde_box').css('z-index', 2);
        $(".hdp_act").css('z-index', 5);
        $(".hdp_silde_one").css('z-index', 10);
    }
    return SlideHdp;
}
})()
