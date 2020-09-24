let iconlist=["http://img10.360buyimg.com/zx/jfs/t1/109320/13/2656/5162/5e095233Eea377c38/74142e658f5564b8.png",
                 "//img20.360buyimg.com/zx/jfs/t1/98183/14/14072/4573/5e61ba0bEfcd34507/53cea81faecb53e1.png",
                  "//img11.360buyimg.com/zx/jfs/t1/96492/7/14293/4671/5e62038cE9c55a196/7ba5c486c3bf5fc6.png",
                 "//img30.360buyimg.com/zx/jfs/t1/118041/36/10772/6054/5ef06782E7b78f321/2108a84d855ec4a2.png",
                 "//img12.360buyimg.com/zx/jfs/t1/96278/17/8873/5436/5e095233E7dc9caf2/fad691bd0cc09788.png",
                 "//img10.360buyimg.com/zx/jfs/t1/87562/1/8883/5313/5e095233Eebc619e9/c08e62a6b7348fa9.png",
                  "//img13.360buyimg.com/zx/jfs/t1/103497/21/8861/5416/5e095233E3b5ab0e0/59aa79a6cfde838f.png",
                  "//img14.360buyimg.com/zx/jfs/t1/89313/39/8790/5086/5e095233E75990129/21fc636eb92afb4b.png",
                  "//img10.360buyimg.com/zx/jfs/t1/109320/13/2656/5162/5e095233Eea377c38/74142e658f5564b8.png",
                  "//img12.360buyimg.com/zx/jfs/t1/98102/25/8731/5453/5e095233E695b4e16/017952da17c9dd6f.png",
                  "//img20.360buyimg.com/zx/jfs/t1/101015/24/13966/4772/5e5f2841E87f2d7f3/51701fe7fb82370e.png"
                 ]
        var isIsvPage = false;
        if($(".cd-cate-name").last().text() == "设计师组件"){
             var str = iconlist.join("");
            let child = $(".cd-colum").last().find(".J_dragItem");
            for(var i = 0, l = child.length;i < l; i++){
                let info = JSON.parse(child.eq(i).attr("data-info"));
                if(str.indexOf(info.iconUrl) > -1){
                    isIsvPage = true;
                    break;
                }
            }
        }else{
            isIsvPage = true;
        }
        if(!isIsvPage){return }


        var harStyle = "width:150%;height:100%;position:absolute;z-index:1050;font-size:12px;border-radius:2px;left:35px;color:#fff;line-height:28px;background:rgba(51,51,51,.9);opacity:0"
        $(".cd-module-toolbar").eq(0).find("ul").prepend('<li class="daima" data-direaction="right" data-content="代码"><img width="100%" height="100%" src="//img10.360buyimg.com/cms/jfs/t1/153979/3/583/313/5f6b1fdfE8f55be86/8b5f268355b29378.png"><span class="daimatxt" style='+harStyle+'>代码</span></li>')
        var pmwidth = window.innerWidth;
        var bleft = (pmwidth - 800)/2;
        var docu = $(".cd-canvas").eq(0).contents();
        let boxStyle = "width:600px;height:410px;background:#fff;margin:auto;margin-top:150px;z-index:999;border-radius:10px;position:relative;overflow:hidden";
        let boxStyle2 = "width:100%;height:0%;background:rgba(0,0,0,0.5);position:absolute;top:0px;left:0px;z-index:999;overflow:hidden";
        let closeStyle = "width:42px;height:42px;background:url(//img12.360buyimg.com/cms/jfs/t1/122575/40/5167/3641/5eeb05c5E63e7af68/d0993b39c1669765.png);position:absolute;top:5px;right:5px;background-size:100%"
        let conStyle = "width:560px;height:300px;background:#eee;position:absolute;top:60px;right:20px;border-radius: 5px;";
        let yesbtn = "width:80px;height:30px;background:#9E9E9E;position:absolute;top:368px;color:#fff;right:210px;line-height:30px;text-align:center;cursor:pointer;font-size:14px;";
        let copybtn = "width:80px;height:30px;background:#1a7ce9;position:absolute;top:368px;color:#fff;left:210px;line-height:30px;text-align:center;cursor:pointer;font-size:14px;";

        $("body").eq(0).append('<div id="yjbox1" style='+boxStyle2+'><div id="yjbox2" style='+boxStyle+'><h2 style="margin:20px;font-size:18px;">模块代码</h2><div id="yjclose" style='+closeStyle+'></div><textarea id="yjdaima" style='+conStyle+'></textarea><div id="yjcopybtn" style='+copybtn+'>复制</div><div id="yjyesbtn" style='+yesbtn+'>保存</div></div></div>')
        console.log(page_data)
        setTimeout(function(){
            $(".cd-module-toolbar").on("click", ".daima",  function(){  //导出数据
                $("#yjbox1").css("height","100%");
                var curFloorId = docu.find(".cd-module.J_module.active").attr("data-floor-id");
                var _now = new Date().getTime()
                var options = {
                    method: 'POST',headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }, credentials: "include",
                    body: "pageId="+page_data.pageId+"&curFloorId="+curFloorId+"&_vender_id="+page_data.venderId+"&_uid_="+_now+"31552446"
                };

                $("#yjdaima").val("");
                $("#yjdaima").focus();
                 var fetchFunc = function(){fetch('https://jshop2013.jd.com/mshop/edit/queryModuleData.json',options).then((res)=>{
                     if(res.ok){res.json().then((data)=>{
                         if(!data.data.curTemplate || !data.data.curTemplate.middleConfig){return }
                         var moduleData = {data:data.data.curTemplate.middleConfig, };
                         if(data.data.curTemplate.middleConfig.jsonarray){  //存在轮播图数据源
                             var options2 = {
                                 method: 'POST',headers: { 'Content-Type': 'application/json' }, credentials: "include",
                                 body: JSON.stringify({"uuid":data.data.curTemplate.middleConfig.jsonarray.materialCode,"backShowType":2,"renderType":0,"_vender_id":page_data.venderId})
                             };
                             fetch('https://op-jshop.jd.com/operations/shopAdvert/queryAllSchedules',options2).then((res)=>{
                                 if(res.ok){res.json().then((data)=>{
                                     var jsondata = {renderType:(data.data.renderType || 0),terminalType:data.data.terminalType,sourceType:data.data.sourceType,materialPlanList:data.data.materialPlanList,
                                                 channel: data.data.channel,
                                                  dataType: data.data.dataType,
                                                  imageHeight: data.data.imageHeight,
                                                  imageWidth: data.data.imageWidth}
                                     moduleData.jsondata = jsondata
                                    $("#yjdaima").val(JSON.stringify(moduleData));
                                 })
                              }
                             })
                         }else{
                             $("#yjdaima").val(JSON.stringify(moduleData));
                         }
                     })}
                     })
                    };fetchFunc();
            })
            $("#yjbox1").on("click", "#yjclose",  function(){
                $("#yjbox1").css("height","0%");
            })
            $("#yjcopybtn").on("click",  function(){
                let text = $("#yjdaima").val();
                if(text){
                    yjcopy(text)
                }
            })

            $("#yjyesbtn").on("click",  function(){  //导入数据
                let text = $("#yjdaima").val();
                if(text){
                    let moduleData = JSON.parse(text);
                    if(moduleData.jsondata){   //存在轮播图数据源
                        let jsondata = moduleData.jsondata;
                        var d = new Date();
                        var year = d.getFullYear();
                        var mouth = (d.getMonth() + 1) < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1);
                        var day = d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate();
                        var hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                        var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
                        var second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
                        var curTime = year + '-' + mouth + '-' + day + ' ' + hour + ':' + minutes + ':' + second;
                        jsondata.materialPlanList[0].startTime = curTime
                        delete jsondata.materialPlanList[0].id;
                        delete jsondata.materialPlanList[0].materialGroupId;
                        delete jsondata.materialPlanList[0].createTime;
                        delete jsondata.materialPlanList[0].modifyTime;
                        delete jsondata.materialPlanList[0].name;
                        delete jsondata.materialPlanList[0].venderId;

                        jsondata.update = false;
                        jsondata._vender_id = page_data.venderId;
                        jsondata.name= "广告组名称";
                        jsondata.backShowType= 2;
                         var options2 = {
                                 method: 'POST',headers: { 'Content-Type': 'application/json' }, credentials: "include",
                                 body: JSON.stringify(jsondata)
                             };
                             fetch('https://op-jshop.jd.com/operations/shopAdvert/putAllSchedules',options2).then((res)=>{
                              if(res.ok){res.json().then((data)=>{
                                  let uuid = data.data.uuid
                                  let data2 = moduleData.data;

                                  data2.jsonarray = {"materialCode":uuid,"moduleCreate":2,"bi":0,"type":"2","showNum":"2"};
                                  let data3 = JSON.stringify(data2);
                                  var curFloorId = docu.find(".cd-module.J_module.active").attr("data-floor-id");
                                  var moduleId = docu.find(".cd-module.J_module.active").attr("data-module-id");
                                  var _now = new Date().getTime();
                                  let middleTemplateId = $(".J_dragItem[data-id="+moduleId+"]").attr("data-tpl-id");
                                 var options = {
                                     method: 'POST',headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }, credentials: "include",
                                     body: "projectId="+page_data.projectId+"&pageId="+page_data.pageId+"&moduleId="+moduleId+"&curFloorId="+curFloorId+"&middleDatas="+data3+"&middleTemplateId="+middleTemplateId+"&moduleFlag=designerModule&parentId=0&_vender_id="+page_data.venderId+"&_uid_="+_now+"31552446"
                                 };
                                      fetch('https://jshop2013.jd.com/mshop/edit/renderModule.json',options).then((res)=>{
                                      if(res.ok){res.json().then((data)=>{
                                          $('.cd-config.J_config').trigger('click');
                                          setTimeout(function(){
                                              $('.cd-config.J_config').trigger('click');
                                              $("#yjbox1").css("left","100%");
                                          }, 500)

                                      })
                                     }
                                  })

                              })
                             }
                             })
                    }else{  //不存在轮播数据
                         let data3 = JSON.stringify(moduleData.data);
                          var curFloorId = docu.find(".cd-module.J_module.active").attr("data-floor-id");
                          var moduleId = docu.find(".cd-module.J_module.active").attr("data-module-id");
                          var _now = new Date().getTime();
                        let middleTemplateId = $(".J_dragItem[data-id="+moduleId+"]").attr("data-tpl-id");
                         var options = {
                             method: 'POST',headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }, credentials: "include",
                             body: "projectId="+page_data.projectId+"&pageId="+page_data.pageId+"&moduleId="+moduleId+"&curFloorId="+curFloorId+"&middleDatas="+data3+"&middleTemplateId="+middleTemplateId+"&moduleFlag=designerModule&parentId=0&_vender_id="+page_data.venderId+"&_uid_="+_now+"31552446"
                         };
                              fetch('https://jshop2013.jd.com/mshop/edit/renderModule.json',options).then((res)=>{
                              if(res.ok){res.json().then((data)=>{
                                  $('.cd-config.J_config').trigger('click');
                                   setTimeout(function(){
                                       $('.cd-config.J_config').trigger('click');
                                       $("#yjbox1").css("left","100%");
                                    }, 500)
                              })
                             }
                          })
                    }

                }
            })

           var yjcopy = function copyText(text) {
                var textarea = document.createElement("textarea");
                var currentFocus = document.activeElement;
                document.body.appendChild(textarea);
                textarea.value = text;
                textarea.focus();
                if (textarea.setSelectionRange)
                    textarea.setSelectionRange(0, textarea.value.length);
                else textarea.select();
               var flag1 = null;
                try {
                    flag1 = document.execCommand("copy");
                } catch(eo){
                    flag1 = false;
                }
                document.body.removeChild(textarea);
                currentFocus.focus();
                return flag1;
            }
            $(".cd-module-toolbar .daima").hover(function(){
                $(".cd-module-toolbar .daimatxt").css("opacity","1");
            }, function(){$(".cd-module-toolbar .daimatxt").css("opacity","0");})

        }, 200)
