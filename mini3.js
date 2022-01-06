function clog(str) {
}


class miniModule {
     constructor(){
     //模块初始化
      let isMiniModule = this.getEnv();
      console.log(isMiniModule);
    //非店铺模块不执行
    if(!isMiniModule){ return};
    //页面配置参数
      this.config = {
        globalData:{},
        token:"",
        maskEle:"",
        gmMiniName:"左右滑动tc,循环无缝滑动,【循环翻转滑,触点轮播二-,【点击展开】,双层轮播-大,自定义换一换,质地动效轮播,点击展开模块,【开屏轮播】,【高阶美工】,【高阶美工】,【视频模块】,KV轮播模块,【多个展开】,二级卡盘模块,【二级卡盘】,【左右滑动】,【放大轮播】,弹出滑动模块,【左右滑动】,【高阶美工】,开屏轮播-弹,【左右滑动】,【左右滑动f,渐变轮播模块,【店铺头条】,【图片热区】,【高阶美工】,【多层轮播】,【创意轮播】,【弹出标签】,【滑动放大】,【触点轮播】,【弹出滑动加,【滑动卡盘弹,触点弹出标签,【多选切屏】,底部放大轮播,【折叠图片】,触点轮播模块,【视频模块】,【倒计时模块,【一键加购】,【渐变轮播】,滑动展开弹窗,轮播动效展开,【3D轮播】,【点击转盘】,3D翻页轮播,【切换轮播】,视频功能模块,【多选切屏】,轮播背景切换,二级宝贝卡盘,触点轮播弹出,【实时轮播】,卡盘放大轮播,【卡盘模块】,触点轮播弹出,触点动效轮播,【滑动卡盘】,滑动切换动效,放大轮播模块,滑动放大模块,【动效轮播】,图片功热区模,【循环无缝滑,放大轮播指针,二级竖版卡盘,滑动放大卡盘,【产品缩放轮,【触点轮播】,触点多层轮播,【转动卡盘】,双屏轮播vh,【弹幕卡盘】,选购助手-互,卡盘放大轮播,首屏创意轮播,图片功热区模,滑动导航模块,轮播导航模块,【触点轮播】,创意轮播模块,商品货架-品,触点轮播开屏,创意选色卡盘,【轮播展开】,【卡盘模块】,循环翻转模块,品牌定制商品,品牌定制商品,卡盘上滑动模,关联轮播模块,【直播模块】,触点动效轮播,关联轮播小图,【竖版卡盘】,【点击入会】,放大轮播tc,弹出滑动加购,放大轮播切换,放大轮播开屏,多个卡盘-个,渐变屏功能模,触点弹出标签,店铺头条模块,宝贝卡盘-个,TF视屏-个,竖版轮播-卡,【点击详情】,【色号选择器,动态弹框-个,点击详情模块,【触摸旋转】,【滑动选择】,自动滑屏-个,卡盘功能模块,滑动卡盘la,点击展开-个,【漂移轮播】,动态翻转模块,卡盘放大轮播,【二级多选卡,滑动触点轮播,【左右滑动t,【气泡推荐】,展开货架-排,倒计时模块-,放大轮播展开,【轮播与下滑,【KV轮播】,搭配试衣间模,【创意轮播A,【背景切换轮,左右滑动功能,动态轮播模块,【轮播直播弹,【弹出标签】,滑动卡盘模块,金币游戏gm,【滑动放大l,翻牌倒计时-,新版VR模块,左右自动滑动,无限滑动切换,无限滑动点击,视屏点开滑动,视屏点击展开,店铺头条高阶,日历订阅模块,卡盘放大3D,视屏滑动卡盘,切换卡盘点击,轮播展开触点,开屏KV滑动,卡盘轮播自动,卡盘切换视频,滑动切换背景,二级卡盘切换,卡片滑动轮播,弹出选择卡盘,点击展开缩放,【换行轮播】,转动卡盘2-,触点轮播弹出,【场景切换】,放大轮播点击,胡涛测试11,首屏多功能轮,放大位移轮播,触点3D酷炫,放大动效轮播,旋转展开轮播,换行二级卡盘,滑动展开轮播,头条会员卡片,【换行卡盘】,触点轮播弹出,动态图片模块,轮播背景切换,触点轮播gm,【视频滑动卡,视屏点击滑动,左右滑动gm,动效左右滑动,滑动3d模块,滑动选择gm,维氏军刀3D,卡盘背景轮播,自动滑屏gm,自动滑屏gm,触点弹出标签,弹窗触点轮播,换一换功能模,锚点导航模块,滑动旋转模块,循环无缝滑动"
      };  
      this.dom = {};
//       this.init();
    }
    
    //加载初始化
    loading(){
        let that = this;
        let index = 0;
        console.log("已更新0.1.81111111111111111------------------");
        return  new Promise(function(resolve, reject){
            let timer = setInterval(()=>{
                //大于10s直接清除提示获取失败
                if(index>10){
                    resolve({success:false});
                    clearInterval(timer);
                    return;
                }
                let moduleEditorEle = $('#module-editor');
                if(that.isPage){
                    moduleEditorEle = $('#root');
                }
                let crx =  $('#crx');
                if(moduleEditorEle.length>0&&crx.length>0){
                    clearInterval(timer);
                    resolve({success:true});
                }
            },1000)
        })
    }
    //读取环境
    getEnv(){
        let indexOf = location.href.indexOf('wpModuleEditor');
        let indexOf2 = location.href.indexOf('wpPageEditor');
        // 生意参谋页面
        if(location.href.indexOf('sycm.taobao.com') > -1){
            this.isSycm = true;
            return true;
        }
        // 生意参谋打开的首页页面
        if(location.href.indexOf("https://market.m.taobao.com/")>-1 && location.href.indexOf("isSycm=true")>-1){
            this.isSycmPageDetail = true;
            return true;
        };
        if(location.href.indexOf("console.open.taobao.com")>-1){  //isv后台，导出所有模块名称
            this.isIsv = true;
            return true;
        };
        if(location.href.indexOf('wangpu.taobao.com/wpFramework.htm') > -1){  //在外层首页
            this.isHome = true;
            return true;
        }
        if(location.href.indexOf('detaildecorate/pageEditor') > -1){  //在外层首页
            this.isWeexDetail = true;
            return true;
        }
        // // 浏览器手淘首页
        // if(location.href.indexOf("m.tmall.com")>-1 || location.href.indexOf("m.taobao.com")>-1){
        //     this.isTaobaoPage = true;
        //     return true;
        // };
        // console.log(window.__vmGlobalData__)
        
        if(indexOf2 > -1){this.isPage = true};
        if(indexOf2 > -1 || indexOf > -1){return true}else{return false};
    }
    //get请求封装
    getRequest(url,data){
        return  new Promise(function(resolve, reject){
            $.ajax({
                url:url,
                type:'GET',
                // xhrFields: {
                //     withCredentials: true
                // },
                // crossDomain: true,
                contentType: 'application/json;charset=utf-8',
                data:data,
                success:function(res){
                    resolve(res);
                },
                fail(res){
                    resolve({success:false});
                }
            })
        });
    }
    //post请求封装
    postRequest(url,data){
        return  new Promise(function(resolve, reject){
            $.ajax({
                cache: false,
                url:url,
                type:'POST',
                // xhrFields: {
                //     withCredentials: true
                // },
                // crossDomain: true,
                // contentType: 'application/json, text/plain, */*',
                // headers:{"Authorization": "Basic bmVvd2F5Oe4lb3dheQ=="},
                dataType : 'json',
                data:data,
                // beforeSend: function(xhr) {
                //     xhr.setRequestHeader("Authorization", "Basic bmVvd2F5Oe4lb3dheQ==");
                // },
                success:function(res){
                    resolve(res);
                },
                fail(res){
                    resolve({success:false});
                }
            })
        });
    }
    getParam(){
        let _me = this;
        return  new Promise(function(resolve, reject){
            try{
                let globalDataText = $('#crx').html(); 
                let tokenEle= $('input[name="_tb_token_"]');
                $('#crx').remove();
                _me.config.globalData = JSON.parse(globalDataText);
                //token获取
                if(tokenEle.length<=0){
                    resolve({success:false })  ;
                    return;
                }
                _me.config.token = $('input[name="_tb_token_"]').eq(0).val();
                resolve({success:true });
            }catch(e){
                resolve({success:false });
            }
          
        })
      
      
        // _this.shopId = this.globalData.shopId;
        // _this.pageId = this.globalData.pageId;
    }
    //获取模块数据
    async getModuleData(){
        let config = this.config;
        
        let _tb_token_ = config.token;
        if(this.pageModuleId){
            let url = " https://wangpu.taobao.com/editor/ajax/wpGetContainerData.do";
            let param = {
                _input_charset: "utf-8",
                _tb_token_: _tb_token_,
                pageId: config.globalData.pageId,
                moduleId: this.pageModuleId
            };
            let requestData = await this.getRequest(url,param);
            return requestData; 
        };
        let moduleId = config.globalData.moduleId;
        let componentId = config.globalData.componentId;   //先获取，后粘贴
        let url = 'https://wangpu.taobao.com/editor/ajax/wpGetModuleFormSchema.do?_input_charset=utf-8';
        let param = {
            _tb_token_:_tb_token_,
            moduleId:moduleId,
            componentId:componentId,
            bizCode:"taobaowp"
        };
        let requestData = await this.getRequest(url,param);
        return requestData;
       
    }
    //获取表单数据
    async getWpGetModuleFormSchema(){
        let config = this.config;
        let _tb_token_ = config.token;
        let moduleId = config.globalData.moduleId;
        let componentId = config.globalData.componentId;   //先获取，后粘贴
        let url = 'https://wangpu.taobao.com/editor/ajax/wpGetModuleFormSchema.do?_input_charset=utf-8';
        let param = {
            _tb_token_:_tb_token_,
            moduleId:moduleId,
            componentId:componentId,
            bizCode:"taobaowp"
        };
        let requestData = await this.getRequest(url,param);
        return requestData;
    }
    //保存模块数据
    async postMod(data){
        let config = this.config;
        let _tb_token_ = config.token;
        let moduleId = config.globalData.moduleId;
        let componentId = config.globalData.componentId;   //先获取，后粘贴
        let url = 'https://wangpu.taobao.com/wpApi.do?_input_charset=utf-8&_tb_token_='+_tb_token_;
        if(this.pageModuleId){
            moduleId = this.pageCells.cells[0];
            componentId = this.pageComponentId;
        };
        let param = {
            moduleId:moduleId,
            componentId:componentId,
            bizCode:"taobaowp",
            action:"module/WpModuleOpAction",
            event_submit_do_UpdateModule:true,
            _input_charset:"utf-8",
            moduleData:JSON.stringify(data),
            _tb_token_:_tb_token_,
        };
        
        let requestData = await this.postRequest(url,param||{});
        return requestData;
    }
    //页面级，更新容器
    async postModContainer(data){
        let config = this.config;
        let _tb_token_ = config.token;
        let url = 'https://wangpu.taobao.com/editor/ajax/updateContainerData.do?_input_charset=utf-8&_tb_token_='+_tb_token_;
        // let moduleId = 0, componentId = 0;
        // if(this.pageModuleId){
        //     moduleId = this.pageModuleId;
        //     componentId = this.pageComponentId;
        // }
        let param = {
            event_submit_do_UpdateContainerData: true,
            pageId: config.globalData.pageId,
            moduleId:this.pageModuleId,
            componentId:this.pageComponentId,
            action:"module/WpContainerOpAction",
            _input_charset:"utf-8",
            moduleData:JSON.stringify(data),
            _tb_token_:_tb_token_
        };
        let requestData = await this.postRequest(url,param||{});
        return requestData;
    }
    //关闭弹窗
    closedDialog(){
        $('#gm_rq_editor').hide();
        $("#gm_rq_editor .export_pluin").hide();
        $("#gm_rq_editor #gmkj_moremode").hide();
        $("#gm_rq_editor #gmkj_modelist").empty();
        $("#gm_rq_editor #gmkj-loading-m").hide();
        $("#gm_rq_editor #gmkj_moremode").find("#gm-yulan-ifm").attr({"src":""});
        $("#gm_rq_editor #yulantit").text("");
        $('#gm_putong').hide();
        $('#gm_diy_list').hide();
    }
    // 获取页面所有模块列表
    async getPageList(){
        let config = this.config;
        let _tb_token_ = config.token;
        //?_input_charset=utf-8&_tb_token_=e8f5ebe555ee3&pageId=277372308
        this.pageModeData = {};
        if(_tb_token_){
            let url = "https://wangpu.taobao.com/editor/ajax/WpGetEditorPageData.do";
            let param = {
                _input_charset: "utf-8",
                _tb_token_: _tb_token_,
                pageId: config.globalData.pageId
            };
            let requestData = await this.getRequest(url,param);
            if(requestData && requestData.isSuccess){
               let mdlist =  requestData.data.moduleList || [];
               let mdobj = {};
               mdlist.forEach((v,i) => {
                mdobj[v.widgetId] = v;
               });
               this.pageModeData = mdobj; 
            }
        };
    }
    //获取所有定制模块
    async getIsvModeList(){
        let _tb_token_ = $('input[name="_tb_token_"]').eq(0).val();
        this.isvModeData = [];
        if(_tb_token_){
            let url = "https://wangpu.taobao.com/editor/wpEditor.htm";
            let param = {
                _input_charset: "utf-8",
                _tb_token_: _tb_token_,
                event_submit_do_GetModuleRule:true,
                action:"module/WpModuleLibAction"
            };
            let redata = await this.getRequest(url,param);
           if(typeof(redata) == 'string'){
               try{
                let reda = JSON.parse(redata);
                if(reda.isSuccess){
                    let reda2 = reda.data || [];
                    reda2.forEach((v,i) => {
                        if(v.groupType == '定制模块'){
                            this.isvModeData = v.wpModuleRuleVOList || [];
                        }
                    })
                }
               }catch(e){

               }
           }
        };
        this.postPageModeListTwo();
    }

    //dom初始化
    domInit(){
        let _this = this;
        this.dom.edit_dom = $('<div id="gm_rq_editor"><div class="gm_bg"></div><div class="export_pluin" style="display:none;"><div class="export_top">热区代码</div><div class="export_content">'
        + '<div id="gm_putong" style="display:none"><textarea class="gm_code" placeholder="请在此贴入代码"></textarea></div>'
        + '<div id="gm_diy_list"></div>'
        + '</div><div class="export_footer">'
        + '<a class="gm_ww" href="http://www.taobao.com/webww/ww.php?ver=3&touid=%E6%88%98%E5%9B%BD%E7%AD%96%E8%AE%BE%E8%AE%A1:%E7%99%BD%E9%9B%AA&siteid=cntaobao&status=1&charset=utf-8" target="_blank" style="margin-right:10px;"><img src="http://amos.alicdn.com/online.aw?v=2&amp;uid=%E6%88%98%E5%9B%BD%E7%AD%96%E8%AE%BE%E8%AE%A1&amp;site=cntaobao&amp;s=2&amp;charset=utf-8" alt="点这里给我发消息" style="display: inline-block; vertical-align: middle;">咨询客服</a>'
        + '<div class="gm_btn gm_copy">复制</div>'
        + '<div class="gm_btn gm_input">确定</div><div class="gm_btn gm_close">关闭</div></div></div>'
        +'<div id="gmkj_moremode" style="display:none;transform: translateX(-130px); width: 700px;height: 500px;background: #fff;position: relative;z-index: 99;margin: 200px auto 0px;border-radius: 14px;padding-top: 20px;">'
        +'<div id="gmkj_moremode_yulan" style="position: absolute;top: 0px;left: 710px;width: 280px;z-index: 99;overflow: hidden;height: 500px;border-radius: 14px;background: #f4f4f4;"><div id="yulantit" style="position: absolute;left: 580px;z-index: 999;top: 7px;width: 100%;font-weight: bold;"></div><div style="width: 100%;height: 100%;text-align: center;line-height: 400px;font-size: 30px;color: #b1b1b1;position: absolute;top: 0;left:0">模块可点击预览</div><div id="gm-yulan-div" style="position:relative;z-index:50; width: 1000px;height: 1000px;margin-top: -270px;margin-left: 0px;transform: scale(0.6);opacity:0"><iframe id="gm-yulan-ifm" src="" width="1000" height="1000"></iframe></div></div>'
        +'<div class="gm_close" style="position: absolute;top: 0px;right: 0px;width: 60px;background: url(https://img.alicdn.com/imgextra/i1/907349826/O1CN01cr2kyK2MSMOPJDgYN_!!907349826.png) no-repeat center;z-index: 9999;background-size: 50%;height: 60px;"></div>'
        +'<h5 id="gm_more_modtit" style="margin: 0;margin-left: 22px; margin-bottom: 10px;font-weight: bold;"><span></span><span style="color: #ff9472;">【在选择已有模块中选择不到模块时使用】</span></h5>'
        +'<div id="gmkj_modelist" style="width: 700px;height: 434px;overflow-y:auto;"></div></div>'
        +'<div id="gmkj-loading-m" style="display:none;width: 100%;height: 100%;position: absolute;z-index: 999;top: 0;left: 0;background: url(https://img.alicdn.com/imgextra/i4/907349826/O1CN01N4iqc32MSMJfOBSnu_!!907349826.gif) no-repeat center;background-size: 40px;background-color: rgba(0,0,0,0.2);"></div></div>').appendTo($("body"));

        //确定
       $('#gm_rq_editor .gm_input').off('click').on('click', function () {
            _this.saveModuleData();
        });
        //关闭弹窗
        $($("body").find('#gm_rq_editor .gm_close')).off('click').on('click', function () {
            // _this.hide_editor();
            _this.closedDialog();
        });
        //复制
        $($("body").find('#gm_rq_editor .gm_copy')).off('click').on('click', function () {
            _this.copy_code(this);
        });

        this.dom.maskEle = $('#module-editor').children('div').children('div').children().eq(0).children('.next-btn');
        
        if(this.isPage){
            let _that = this;
            let back = ()=>{
                setTimeout(()=>{
                let preview = $('#root').children('div').eq(0).children('div').eq(1).children('div').eq(1).children('div').eq(0).children('div').eq(1).children('div').eq(0);
                if(!preview.length){
                    back();
                    return 
                };
                this.getPageList();
                console.log("preview-------------------------------------")
                preview.on('click',"div",function(e){
                    let elem =  $(e.currentTarget);
                    let className = elem.attr("class");
                    _this.clickData = {index:elem.index(), preview:preview};
                    if(className.indexOf("Cell__ComponentCell") > -1){
                        setTimeout(()=>{
                            let id = elem.children("div").eq(1).children("div").eq(0).attr("id");
                            if(id){
                                _that.pageModuleId = id;
                            };
                            let titname = $('.next-loading-wrap').children("div").eq(0).text();
                            let tit = titname.substring(0,6);
                            
                            //判断，只有定制模块才会导出代码
                            if(_this.config.gmMiniName.indexOf(tit) > -1){}else{
                                $('.next-loading-wrap #gm-oldmod-btn').remove();
                                return 
                            };
                            let tool = elem.children("div").last();
                            let btn = tool.children("div").last();
                            _this.toolFirst = tool.children("div").first();
                            if(tool.attr("class").indexOf("ComponentHandler__ToolWrap") > -1 && btn.attr("class").indexOf("diydaima") == -1){
                                var daima = '<div class="diydaima" style="height: 30px;line-height: 30px; width: 30px; text-align:center; background: #fff;margin-top: 10px; border-radius: 4px;color:#666;cursor: pointer;font-weight:bold">code</div>';
                                var daimabtn = $(daima);
                                tool.append(daimabtn);
                                
                                if($("#gm-oldmod-btn") && $("#gm-oldmod-btn").length){
                                }else{
                                    let oldbtn = '<button type="button" id="gm-oldmod-btn" class="next-btn next-medium next-btn-primary" style="position:absolute;top:52px;right:26px;z-index:99; background-color: #5584ff;color: #fff;margin-right: 10px;height: 39px; padding: 3px;"><span class="next-btn-helper">选择低版本模块</span></button>';
                                    $('.next-loading-wrap').append(oldbtn);
                                    $('.next-loading-wrap').find("#engine-con").on("mouseenter", 'textarea',function(e){
                                       let value = $(e.currentTarget).val();
                                       if(typeof(value)=='string' && value.indexOf("diyModule")>-1){
                                           let pp = $(e.currentTarget).parent();
                                           if(!pp.find(".diyedit-btn-gm").length){  //判断是否存在编辑按钮
                                                pp.css("position", "relative");
                                                let edit = '<button type="button" class="diyedit-btn-gm next-btn next-medium next-btn-primary" style="position:absolute;top:0px;right:0px;z-index:99; background-color: rgba(0,0,0,0.5);height: 100%;color: #fff;"><span class="next-btn-helper">在线编辑</span></button>';
                                                pp.append(edit)
                                           }
                                       }
                                    })
                                    $('.next-loading-wrap').find("#engine-con").on("mouseenter", 'input',function(e){
                                        let value = $(e.currentTarget).val();
                                        if(typeof(value)=='string' && value.indexOf("diyModule")>-1){
                                            let pp = $(e.currentTarget).parent();
                                            if(!pp.find(".diyedit-btn-gm").length){
                                                 pp.css("position", "relative");
                                                 let edit = '<button type="button" class="diyedit-btn-gm next-btn next-medium next-btn-primary" style="position:absolute;top:0px;right:0px;z-index:99; background-color: rgba(0,0,0,0.5);height: 100%;color: #fff;"><span class="next-btn-helper">在线编辑</span></button>';
                                                 pp.append(edit)
                                            }
                                        }
                                     })
                                    //  编辑按钮
                                     $('.next-loading-wrap').on("click", ".diyedit-btn-gm",function(e){
                                         let elem = $(e.currentTarget).parent();
                                         
                                         let value = "";let dataElem = null;
                                         if(elem.find("input").length){ //存在输入框
                                            value = elem.find("input").val();
                                            dataElem = elem.find("input");
                                         }else if(elem.find("textarea").length){ //存在输入框
                                            value = elem.find("textarea").val(); dataElem = elem.find("textarea");
                                         }
                                         if(value && typeof(value)=='string' && value.indexOf("diyModule")>-1){
                                            _this.editConfig = {}
                                            _this.editConfig.ranNum = parseInt(Math.random()*100000);  //生成一个随机数
                                            dataElem.attr("id", "diyedit-btn-gmbox"+_this.editConfig.ranNum);
                                            _this.editConfig.oldValue = value;//记录上一次数据
                                            if($(".diyeditback-btn-gm").length){$(".diyeditback-btn-gm").remove();}
                                            let PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+9QS7g9DIbIckk/7mTbNN7IHKO5bEFnxIUUk1msuUOH329XAXDnPu4H5Yuy7qgcg8237UROxOeUhkK367pDx1SyKpcKBsA1m/8L9wSWpmqU6orH1oCSZ3dd3LgyRDi4iWcOVeo9sxdaH38EDVxg9BHTUu4ZCMQEPo2Ompu742WQIDAQAB';
                                            var encrypt = new JSEncrypt();
                                            //encrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----'+PRIVATE_KEY+'-----END RSA PRIVATE KEY-----');
                                            encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
                                            console.log(value)
                                            var encrypted = encrypt.encrypt(value);
                                            
                                            console.log('加密后数据:%o', encrypted);
                                            var PRIVATE_KEY = 'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAL71BLuD0MhshyST/uZNs03sgco7lsQWfEhRSTWay5Q4ffb1cBcOc+7gfli7LuqByDzbftRE7E55SGQrfrukPHVLIqlwoGwDWb/wv3BJamapTqisfWgJJnd13cuDJEOLiJZw5V6j2zF1offwQNXGD0EdNS7hkIxAQ+jY6am7vjZZAgMBAAECgYEAoNRCaSBLDxMA+5i+PgBBPSct5UMs5vg9Mrdrnn9CaRLvXLk47+JXWGCxaVA14oLuP/tqJaPrFujlRKCxe56G35m6r7rJssyHCK0L24r7BRDahWAd12eshEKCIirZJe8MdPzlfzYsB2E9FJKLc2UNbV7SoMEe56RxVWPfdTKhOAECQQDt3mkFI5qAfgaZcouISS4/bnJ9hYDuly5WT0XEoI7cdQq+tYCVqIIfyxZupbs+z9mHR7JyzrPaMPpdLhNZLpkBAkEAzYM1nt1XIQRpYMcfojvf1ZM/rKMFgfVJuxCXE4RdinVDGyoS+c77Dr87oeBipoWnSCiopbDCoGyEx3wd844FWQJBAIXkvcTQx7UwO1LAsV4jo069QuD49xxWKRUYRjNqFUBu+X9j919GnQh8bsIVtBKlONL3PrF1PLPDAgrVVrrKigECQEl7VcvU5pd2pVsmN6hhcjpCaS0IKSr7kn5hgzNGS8/696CZ3akWmev+8oqB2aQi+9owN4Tu+9gylRNizK7OJBkCQQDM/rZPMbrGR4TXM2wSuss2A3AOK6VKmtb+CQ5YY1D5qDIbbKkmBle2PmpR0A/l3QFLr1UqY4oUzXOpDc09xVgJ'        
                                            //使用私钥解密
                                            var decrypt = new JSEncrypt();
                                            //decrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
                                            decrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----'+PRIVATE_KEY+'-----END RSA PRIVATE KEY-----');
                                            var uncrypted = decrypt.decrypt(encrypted);
                                            console.log('解密后数据:%o', uncrypted);

                                            setTimeout(()=>{
                                                _this.setInputValueDiy("dasdasdad")
                                            }, 1000)   
                                         }
                                     })
                                    //  撤销按钮
                                     $('.next-loading-wrap').on("click", ".diyeditback-btn-gm",function(e){
                                        _this.setInputValueDiy(_this.editConfig.oldValue, true)
                                     })

                                    $("#gm-oldmod-btn").on('click',function(e){
                                        _this.showMoreMode();
                                    })
                                };
                                daimabtn.on('click',function(e){
                                    _this.openModuleDialog('module');
                                });
                            }
                        }, 600)
                    }
                })
                }, 500)
            };
            back();
            return 
        }
        var exportsButtonEle = '<button type="button" id="gm-export-btn" class="next-btn next-medium next-btn-primary" style="background-color: #03a9f4;color: #fff;margin-right: 10px;"><span class="next-btn-helper">导出内容</span></button>';
        var importButtonEle = '<button type="button" id="gm-import-btn"  class="next-btn next-medium next-btn-primary" style="background-color: #03a9f4;color: #fff;margin-right: 10px;"><span class="next-btn-helper">导入内容</span></button>';
        var importDiyButtonEle = '<button type="button" id="gm-import-diy-btn"  class="next-btn next-medium next-btn-primary" style="background-color: #03a9f4;color: #fff;margin-right: 10px;"><span class="next-btn-helper">拓展配置</span></button>';
        
        this.exportsButtonEle = $(exportsButtonEle);
        this.importButtonEle = $(importButtonEle);
        this.importDiyButtonEle = $(importDiyButtonEle);


        this.dom.maskEle.before(this.exportsButtonEle);
        this.dom.maskEle.before(this.importButtonEle);
        this.dom.maskEle.before(this.importDiyButtonEle);
        //导出按钮
        this.exportsButtonEle.on('click',function(e){
            _this.openModuleDialog('module')
        });
         //导入按钮
         this.importButtonEle.on('click',function(e){
             _this.config.exportType = "module";
            _this.openModuleExportDialog('module');
        });
        //插入自定义代码判断
        this.importDiyButtonEle.on('click',function(e){
           _this.config.exportType = "diyContent";
           _this.openDiyContentDialog();
       });
    }
    setInputValueDiy(value, back){
        let elemjq = $("#diyedit-btn-gmbox"+this.editConfig.ranNum);
        elemjq.focus();
        elemjq.val(value);
        elemjq.text(value);
        elemjq.html(value);
        // $("#diyedit-btn-gmbox").change();
        // $("#diyedit-btn-gmbox").input();
        // $("#diyedit-btn-gmbox").trigger("change");
        // $("#diyedit-btn-gmbox").blur();
        let elen = document.getElementById('diyedit-btn-gmbox'+this.editConfig.ranNum)
        if (elen.fireEvent) {
            elen.fireEvent('onchange');
        }else{
            elen.dispatchEvent(new Event('input', { bubbles: true }));
        }
        elemjq.blur();
        let pp = elemjq.parent();
        if(!back){
            let edit = '<button type="button" class="diyeditback-btn-gm next-btn next-medium next-btn-primary" style="position:absolute;top:0px;right:77px;z-index:99; background-color: rgba(255,147,0,0.5);height: 100%;color: #fff;"><span class="next-btn-helper">撤销</span></button>';
            if(!pp.find(".diyeditback-btn-gm").length){  //
                pp.append(edit);
            }
        }else{
            if(pp.find(".diyeditback-btn-gm").length){pp.find(".diyeditback-btn-gm").remove();}
        }
    }
    async showMoreMode(){
        if(!$(".diydaima").length){
            alert("【请再点击一次模块】");
            return 
        };
        // 先获取一次模块详情数据
        let requestData  = await this.getModuleData();
        if(!requestData.isSuccess){
            alert('获取数据失败');
            return;
        }
      
        let moddata = requestData.data.moduleData;
        let mod = null;
        if(moddata.cellDataList && moddata.cells){
            mod = moddata.cellDataList[moddata.cells[0]];
            this.pageCells = {cells:moddata.cells, moduleEditTitle:mod.moduleEditTitle, pageIds: mod.pageIds};
            // this.pageModuleId = moddata.cells[0];
        }else{mod = moddata};
        if(!mod){return }; //不存在数据
        if(this.pageModuleId && !mod.pageIds){alert("请先保存模块"); return };  //页面上没有保存数据
        let moduleInstantsName = requestData.data.moduleInstantsName;
        this.pageComponentId = requestData.data.componentId;

        this.loadCif = {};
        this.loadCif = {page:1, moduleInstantsName:moduleInstantsName, data:[]};
        $("#gm_rq_editor").show();  //隐藏确定按钮
        let _this = this;
        $("#gm_rq_editor .export_pluin").hide();
        $("#gm_rq_editor #gmkj_moremode").show();
        $("#gm_rq_editor #gm_more_modtit").find("span").eq(0).text(moduleInstantsName);
        this.getModeList();
        $("#gm_rq_editor #gmkj_modelist").append('<div id="gmmodelist-con"></div>');
        $("#gm_rq_editor #gmkj_modelist").append('<button type="button" id="gm-load-more" class="next-btn next-medium next-btn-primary" style="background-color: #03a9f4;color: #fff;left: 50%;transform: translateX(-50%);margin-bottom: 20px;"><span class="next-btn-helper">点击加载更多</span></button>');
        $("#gmkj_modelist #gm-load-more").off('click').on('click',function(e){
            if(!_this.loadMore){
                _this.loadCif.page +=1;
                _this.getModeList();
            }   
        });
        $("#gm_rq_editor #gmkj_modelist").off('click');
        $("#gm_rq_editor #gmkj_modelist").on('click', '.gm-more-item', function (e) {
            let index = $(e.currentTarget).attr("data-index");
            if(_this.loadCif.data[index]){
                _this.saveOldModData(_this.loadCif.data[index]);
            };
        });
        $("#gm_rq_editor #gmkj_modelist").on('click', '.gm-more-edit', function (e) {
            let index = $(e.currentTarget).attr("data-index");
            let item = _this.loadCif.data[index];
            $("#gm_rq_editor #gmkj_moremode").find("#gmkj_moremode_yulan").show();
            $("#gmkj_moremode_yulan #gm-yulan-div").css({"transform":"scale(0.6)", "opacity":0, "margin-left":"0px"});
            $("#gm_rq_editor #gmkj_moremode").find("#gm-yulan-ifm").attr({"src":item.moduleEditorUrl});
            $("#gm_rq_editor #yulantit").text("模块名称："+item.moduleEditTitle);
            setTimeout(()=>{
                $("#gmkj_moremode_yulan #gm-yulan-div").css({"transform":"scale(0.6)", "opacity":1, "margin-left":"323px"});
            }, 1000)
        });
    }
    async getModeList(end){
        this.loadMore = true;
        $("#gm_rq_editor #gmkj-loading-m").show();
        let config = this.config;
        let _tb_token_ = config.token;
        let url = 'https://wangpu.taobao.com/wpApi.do?_input_charset=utf-8';
        let param = {
            _tb_token_:_tb_token_,
            event_submit_do_GetModule:true,
            action:"module/WpModuleLibAction",
            page:this.loadCif.page,
            pageSize:50
        };
        let redata = await this.getRequest(url,param);
        let str = "";
        let date = new Date();
        let requestData2 = null;
        try{
            requestData2 = JSON.parse(redata);
        }catch(e){ alert('数据解析失败');};
        
        if(requestData2 && requestData2.isSuccess && requestData2.data && requestData2.data.data){
            for(let i = 0, l = requestData2.data.data.length; i < l; i++){
                let item = requestData2.data.data[i];
                if(this.loadCif.moduleInstantsName == item.moduleInstantsName && item.moduleData.moduleEditTitle && item.componentId != this.pageComponentId){
                    date.setTime(item.gmtModified);
                    let m = (date.getMonth()+1), d = date.getDate();
                    d = d < 10?"0"+String(d):d;
                    m = m < 10?"0"+String(m):m;
                    let ds = m+"-"+d;
                    str += `<div style="width: 95%;height: 100px; background: #d5ebfd;border-radius: 14px;margin: 0 auto 20px;padding-left: 20px;line-height: 30px;font-size: 15px;overflow: hidden;position:relative;">
                    <div style="margin-top: 20px;">模块名称：<span style="font-weight: bold;">${item.moduleData.moduleEditTitle}</span></div><div>更新日期：<span style="color: #ff5722;">${ds}</span></div>
                    <button type="button" data-index="${this.loadCif.data.length}" class="gm-more-item next-btn next-medium next-btn-primary" style="background-color: #607d8b;color: #fff;right: 18px;position: absolute;top: 35px;"><span class="next-btn-helper">使用此模块代码</span></button>
                    <button type="button" data-index="${this.loadCif.data.length}" class="gm-more-edit next-btn next-medium next-btn-primary" style="background-color: #03a9f4;color: #fff;right: 144px;position: absolute;top: 35px;"><span class="next-btn-helper">点击预览</span></button>
                    </div>`;
                    this.loadCif.data.push(item);
                }
            }
        }
        if(str){
            $("#gm_rq_editor #gmkj_modelist").find("#gmmodelist-con").append(str);
        }else{
            if(!end){  //加载两次，减少用户点击
                this.loadCif.page +=1;
                this.getModeList(true);
            }else{
                alert("没有获取到数据，可以再次点击加载");
            }   
        };
        
        this.loadMore = false;
        $("#gm_rq_editor #gmkj-loading-m").hide();
    }
    async saveOldModData(item){
        let r = confirm("请导入相同模块的代码，避免渲染出错； 确定导入该代码？");
        if(!r){return};
        $("#gm_rq_editor #gmkj-loading-m").show();
        let mod = Object.assign({}, item.moduleData);
        if(mod.hasOwnProperty('moduleEditTitle')){delete mod.moduleEditTitle};
        if(mod.hasOwnProperty('pageIds')){delete mod.pageIds};
        
        if(this.pageCells.moduleEditTitle){
            mod.moduleEditTitle = this.pageCells.moduleEditTitle
        }else{return };
        if(this.pageCells.pageIds){
            mod.pageIds = this.pageCells.pageIds;
        };
        let res = await this.postMod(mod);
        if(!res.isSuccess){ 
            alert(res.message);
            $("#gm_rq_editor #gmkj-loading-m").hide();
        }else{
            let containerData = {cells:this.pageCells.cells, cellDataList:{}};
            containerData.cellDataList[this.pageCells.cells[0]] = mod;
            let res1 = await this.postModContainer(containerData);
            if(!res1.isSuccess){ alert(res1.message);$("#gm_rq_editor #gmkj-loading-m").hide();}
            location.reload();
            // alert("成功")
            // this.toolFirst.trigger("click");
            // setTimeout(()=>{
            //     that.clickData.preview.children('div').eq(that.clickData.index).trigger("click");
            //     that.clickData.preview.children('div').eq(that.clickData.index).children().trigger("click");
            //     that.closedDialog();
            //     $("#gm_rq_editor #gmkj-loading-m").hide();
            // }, 400);
        }
        return 
    }
    //复制代码
    copy_code(own){
        var GM = this;
        $('#gm_putong .gm_code').select();
        var copy = document.execCommand("Copy");
        if (copy == true) {
            $(own).text('已复制').delay(500).animate({
                zIndex: 1
            }, 0, 'linear', function () {
                $(this).text('复制');
            });
        } else {
            $(own).hide();
            clog('copy falied');
        }
    }
    //打开模块导出数据
    async openModuleDialog(type){
        let requestData  = await this.getModuleData();
        if(!requestData.isSuccess){
            alert('获取数据失败');
            return;
        }
        let moddata = requestData.data.moduleData;
        let mod = null;
        if(moddata.cellDataList && moddata.cells){
            mod = moddata.cellDataList[moddata.cells[0]];
            this.pageCells = {cells:moddata.cells, moduleEditTitle:mod.moduleEditTitle, pageIds: mod.pageIds};
            // this.pageModuleId = moddata.cells[0];
        }else{mod = moddata};
        if(!mod){return }; //不存在数据
        if(this.pageModuleId && !mod.pageIds){alert("请先保存模块"); return };  //页面上没有保存数据
        this.pageComponentId = requestData.data.componentId;
        
        // if(this.pageComponentId){mod.copy_componentId = this.pageComponentId}
        if(mod.hasOwnProperty('moduleEditTitle')){delete mod.moduleEditTitle};
        if(mod.hasOwnProperty('pageIds')){delete mod.pageIds};
        this.config.exportType = "module";
         //页面拷贝，不隐藏确定按钮
        if(!this.pageModuleId){ 
            $("#gm_rq_editor .gm_input").hide();  //隐藏确定按钮
        };
        
        $("#gm_putong .gm_code").val('');
        $("#gm_putong .gm_code").val(JSON.stringify(mod));
        $("#gm_rq_editor").show();
        $("#gm_rq_editor .export_pluin").show();
        $("#gm_rq_editor #gmkj_moremode").hide();
        $("#gm_rq_editor .gm_copy").show(); 
        $('#gm_putong').show();
    }
    //打开导入弹窗
    openModuleExportDialog(){
        $("#gm_rq_editor").show();
        $("#gm_rq_editor .export_pluin").show();
        $("#gm_rq_editor #gmkj_moremode").hide();
        $("#gm_rq_editor .gm_copy").hide(); 
        $("#gm_rq_editor .gm_input").show();  //隐藏复制按钮，显示确定按钮
        $("#gm_putong .gm_code").val("");  //清空代码
        $('#gm_putong').show(); //打开模块代码块
        $('#gm_diy_list').hide();//隐藏列表
    }
    //获取模块参数
    getDiyParam(moduleData,param){
        let types =  typeof moduleData;
        if(Array.isArray(moduleData)){
            types = "array";
        };
        if(types=='object'){
            Object.keys(moduleData).map((item)=>{
                //判断当前类型是否是冠美自定义
                if(item.indexOf('gmdiy')>=0&&(moduleData[item]=='true'||moduleData[item]==true)){
                    param.ids.push({
                        name:item
                    });
                };
                if((typeof moduleData[item]=='object')||(typeof moduleData[item]=='array')){
                    this.getDiyParam(moduleData[item],param)
                };
            })
        }else if(types =='array'){
            moduleData.map((p1,p2)=>{
                Object.keys(p1).map((item)=>{
                    //判断当前类型是否是冠美自定义
                    if(item.indexOf('gmdiy')>=0&&(p1[item]=='true'||p1[item]==true)){
                        param.ids.push({
                            name:item,
                            index:p2
                        });
                    }
                   if((typeof p1[item]=='object')||(typeof p1[item]=='array')){
                       this.getDiyParam(p1[item],param)
                   };
                })
            })
        }
    }
    //获取模块表单参数
    getFormParam(moduleData,param){
        moduleData = moduleData||{};
        Object.keys(moduleData).map((p1)=>{
            let dataName = moduleData[p1].dataName;
            param.data[dataName] = moduleData[p1];
            if(moduleData[p1].components){
                this.getFormParam(moduleData[p1].components,param);
            }
        })
    }
    //获取dom节点
    getFormDom(moduleData,param){
        let ids = param.ids;
        let dom = "";
        ids.map((p1)=>{
           let filedName = p1.name+'_diycontent';
           let index ="";
           if(p1.hasOwnProperty('index')){
              filedName = p1.name+'_'+p1.index+"_content";
              index = "_"+p1.index;
           };
           let formData = param.data[p1.name]||{};
           let filedData = moduleData[filedName];

           let title = formData.label&&formData.label.title;
           if(formData.type=='OfficialCheckbox'){
               title = formData.extension&&formData.extension.text;
           };
           dom += `
             <div class="gm_diy_slider" data-id="${filedName}">
                <div class="gm_diy_title">${title}${index}_自定义代码</div>
                <div class="gm_diy_content">
                    <textarea class="gm_diy_content_code" placeholder="请在此贴入代码" >${filedData?filedData:''}</textarea>
                </div>
            </div>
           `;
        });
        dom =`
         <div class="gm_diy_wrap">
             ${dom}
         </div>
          `;
       return dom;
    }
    //打开自定义导出代码框
    async openDiyContentDialog(){
        let requestData  = await this.getModuleData();
        if(!requestData.isSuccess){
            alert('获取数据失败');
            return;
        }
        //匹配模块参数
        let moduleData = requestData.data.moduleData||{};
        let formComponents = requestData.data.components||{};
        let param = {
            ids:[],
            data:{}
        };
        this.getDiyParam(moduleData,param);
        this.getFormParam(formComponents,param);
        //渲染表单数据
        let dom = this.getFormDom(moduleData,param);
        //插入节点
        $('#gm_diy_list').html(dom);
        $("#gm_rq_editor").show();
        $("#gm_rq_editor .export_pluin").show();
        $("#gm_rq_editor #gmkj_moremode").hide();
        $('#gm_diy_list').show(); //显示自定义代码
    }
    //保存数据
    async saveModuleData(){
      let  exportType =  this.config.exportType ;
      let moduleData = {};
      
      //模块数据
      if(exportType == 'module'){
          let r = confirm("请导入相同模块的代码，避免渲染出错； 确定导入该代码？");
          if(!r){return};
          let modContent =  $("#gm_putong .gm_code").val();
          try{
            modContent = JSON.parse(modContent);
          }catch(e){
            alert('数据解析失败');
          };
          if(modContent){
            moduleData  = modContent;
          };
          if(this.pageModuleId){  //页面复制代码
            if(this.pageCells.moduleEditTitle){
                moduleData.moduleEditTitle = this.pageCells.moduleEditTitle;
            }else{return }
            if(this.pageCells.pageIds){
                moduleData.pageIds = this.pageCells.pageIds;
            }
            $("#gm_rq_editor #gmkj-loading-m").show();
            let res = await this.postMod(moduleData);
           
            if(!res.isSuccess){ alert(res.message); $("#gm_rq_editor #gmkj-loading-m").hide();}else{
                let containerData = {cells:this.pageCells.cells, cellDataList:{}};
                containerData.cellDataList[this.pageCells.cells[0]] = moduleData;
                let res1 = await this.postModContainer(containerData);
                if(!res1.isSuccess){ alert(res1.message)};
                $("#gm_rq_editor #gmkj-loading-m").hide();
            }
            //刷新页面
            location.reload();
            return 
          }
      }else if(exportType =='diyContent'){
        //读取节点代码
        let slider = $('#gm_diy_list .gm_diy_slider');
        slider.each(function(e){
            let id = $(this).attr('data-id');
            let diyCode = $(this).find('.gm_diy_content_code').val();
            moduleData[id] = diyCode;
        })
        
      }else{
          return;
      }
      if(moduleData&&Object.keys(moduleData).length<=0){
          return;
      }
      let modRequest = await this.getWpGetModuleFormSchema();
      if(!modRequest.isSuccess){
         alert('数据读取失败');
        return;
      }

      let mod = modRequest.data.moduleData;

    //单个模块  
    if(exportType =='diyContent'){
        moduleData = {
            ...mod,
            ...moduleData
        }
    }
    if(mod.moduleEditTitle){
        moduleData.moduleEditTitle = mod.moduleEditTitle;
    }else{
        moduleData.moduleEditTitle = this.globalData.componentTitle;
    };
    if(mod.pageIds){
        moduleData.pageIds = mod.pageIds;
    };
    // return;
     let res = await this.postMod(moduleData);
     if(!res.isSuccess){ alert(res.message)};
     //刷新页面
     location.reload();
    }
    getQueryString(url, name) {
        url = url.replace('?', '&');
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    // 生意参谋数据处理
    async setSycmPage(){
        let t = 0;
        let that = this;
        let timer = setInterval(() => {
            if($(".page-detail-content-wrapper").length){
                let tokenarr = $("[name=microdata]").attr("content").split(";");
                let token = "";
                for(let i = 0; i < tokenarr.length; i++){
                    if(tokenarr[i].indexOf("legalityToken") > -1){
                        token = tokenarr[i].split("=")[1];
                    }
                }
                that.config.token = token;
                $(".root-container").append('<button type="button" id="gm-sycm-btn-more" class="next-btn next-medium next-btn-primary" style="background: none; color: #4176de; margin-right: 10px; position: absolute; z-index: 9999999;top: 0; transform: scale(.8); width: 34px; left: 0; height: 108px; border-radius: 5px; cursor: pointer;"><span class="next-btn-helper">查看点击详情</span></button>');
                    $("#gm-sycm-btn-more").on("click", ()=>{
                        that.getDateilSycm();
                    });
                clearInterval(timer);
            }
            t+=1;
            if(t > 10){clearInterval(timer);}
        },1000)        
    }
    async getDateilSycm(){ //获取生意参谋点击量详情
        let url = "https://sycm.taobao.com/flow/v2/decorate/wl/getPageDetailData.json";
        let spmb = this.getQueryString(location.href, "spmb");
        let pageType = this.getQueryString(location.href, "pageType");
        let dateRange = this.getQueryString(location.href, "dateRange");
        let dateType = this.getQueryString(location.href, "dateType");
        let pageId = this.getQueryString(location.href, "pageId");
        let t = (new Date()).getTime();
        let openurl = $("iframe").attr("src");
        // alert(openurl)
        if(!this.config.token){return };
        let data = {
            appType: 20,
            dateRange: dateRange,
            dateType: dateType,
            pageId: pageId,
            pageType: pageType,
            spmb: spmb,
            type: "all",
            _: t,
            token: this.config.token
        };
        let deData = await this.getRequest(url, data);
        if(!deData.code){
            let code = JSON.stringify(deData);
            window.open(openurl, code, "width=400,height=800,location=no,menubar=no,resizable=no,status=no,screenY=120,screenX=100")  //
        }
    }
    initSycmPageDetail(){
      let deData = null;
      let wname = window.name;
      if(wname.indexOf("nameStorage:") > -1){
        wname = window.decodeURIComponent(wname);
        wname = wname.split('nameStorage:')[1];
        wname = wname.split('?wm_referrer=')[0];
      };
      try{
        deData = JSON.parse(wname);
      }catch(e){
      }
      if(!deData){return };
        window.onresize= function(){
            // alert("禁止拖动改变大小");
            window.resizeTo(400, 800);//改变大小   
        };
      let _this = this;
      _this.deData = deData;
      _this.clickTab = "clickCnt";
        let timer = setInterval(()=>{
            if(".module-list-wrapper"){
                let s = "background: #bfbfbf;color: #fff; position: fixed;top: 7px; z-index: 999999; right: 5px;border: none; padding: 5px;border-radius: 5px;";
                $(".module-list-wrapper").append(`<button type="button" class="gmbtn" id="gm-btn-clickCnt" style="${s}background:#03a9f4"><span class="next-btn-helper">点击量</span></button>`);
                $(".module-list-wrapper").append(`<button type="button" class="gmbtn" id="gm-btn-clickUv" style="${s}right:80px"><span class="next-btn-helper">点击人数</span></button>`);
                $(".module-list-wrapper").append(`<button type="button" class="gmbtn" id="gm-btn-clickRate" style="${s}right:170px"><span class="next-btn-helper">点击率</span></button>`);

                $("#gm-btn-clickCnt").on("click", ()=>{
                    _this.setPointData(_this.deData, "clickCnt");
                    _this.clickTab = "clickCnt";
                    $("#gm-btn-clickCnt").css({"background":"#03a9f4"}).siblings(".gmbtn").css({"background":"#bfbfbf"});
                });
                $("#gm-btn-clickRate").on("click", ()=>{
                    _this.setPointData(_this.deData, "clickRate");
                    _this.clickTab = "clickRate";
                    $("#gm-btn-clickRate").css({"background":"#03a9f4"}).siblings(".gmbtn").css({"background":"#bfbfbf"});
                });
          
                $("#gm-btn-clickUv").on("click", ()=>{
                    _this.setPointData(_this.deData, "clickUv");
                    _this.clickTab = "clickUv";
                    $("#gm-btn-clickUv").css({"background":"#03a9f4"}).siblings(".gmbtn").css({"background":"#bfbfbf"});
                });
                // 添加样式
                $(".module-list-wrapper").append("<style>.showBar{overflow:scroll !important} .showBarbody::-webkit-scrollbar{width:10px;} .showBarmin::-webkit-scrollbar{height:7px !important;} .showBar::-webkit-scrollbar{display:block !important;height:20px;background:#cacaca}.showBar::-webkit-scrollbar-thumb{background: #333;}</style>");
                // 设置轮播和滑动显示滚动条

                

                _this.showModNum = $(".module-list-wrapper").find(".module-wrapper").length;
                this.setCssSycm();
                setTimeout(()=>{
                    _this.setPointData(_this.deData, "clickCnt");
                    _this.loopFunc();
                }, 600);
                clearInterval(timer)
            }
        }, 1000)
    }
    loopFunc(){  //生意参谋定时器控制轮播高度
        let _this = this;
        let imer = setTimeout(()=>{
            for(let i = 0; i < $(".module-list-wrapper").find(".a-swiper").length; i++){
                 $(".module-list-wrapper").find(".a-swiper").eq(i).css({"height":_this.swiperH[i]});
            }
             
            $(".sycmDecorateBlock").css("pointer-events", "none");
            $(".sycmDecorateDOMPoint").css("pointer-events", "none");

            let showModNum = $(".module-list-wrapper").find(".module-wrapper").length;
            if(showModNum != _this.showModNum){
                _this.setCssSycm();
                _this.setPointData(_this.deData, _this.clickTab);
            }
            clearTimeout(imer);
            this.loopFunc();
        }, 1000)
    }
    setCssSycm(){
        $(".module-list-wrapper").find(".a-scroll-view").addClass("showBar").css({"overflow":"scroll"});
        if($(".module-list-wrapper").find(".a-scroll-view").length){
            for(let i = 0; i < $(".module-list-wrapper").find(".a-scroll-view").length; i++){
                let elem = $(".module-list-wrapper").find(".a-scroll-view").eq(i);
                let h = parseInt(elem.css("height").split("px")[0]) < 100;
                if(h){
                    elem.addClass("showBarmin");
                }
            }
        };
        $("body").addClass("showBar showBarbody").css({"overflow-y":"scroll", "overflow-x":"hidden"});
        $(".module-list-wrapper").find(".a-swiper-container").css({"position":"relative",  "width":"100%", "height":"100%"});
        $(".module-list-wrapper").find(".a-swiper").addClass("showBar showBarmin").css({"overflow-x":"scroll", "overflow-y":"hidden"});
        // 放大轮播显示滚动条
        if($(".module-list-wrapper").find(".a-movable-view").length){
            $(".module-list-wrapper").find(".a-movable-view").addClass("showBar").css({"overflow":"scroll"});
        };
        $(".module-list-wrapper").find(".a-scroll-view").parent().css({"overflow":"auto"});
        for(let i = 0; i < $(".module-list-wrapper").find(".a-scroll-view").length; i++){
            let elem = $(".module-list-wrapper").find(".a-scroll-view").eq(i);
            if(elem.children().length == 1 && elem.children().eq(0).css("overflow") == "hidden"){
                elem.children().eq(0).addClass("showBar").css({"overflow":"scroll"});
            }
        }
        this.swiperH = {};
        for(let i = 0; i < $(".module-list-wrapper").find(".a-swiper").length; i++){
            this.swiperH[i] = $(".module-list-wrapper").find(".a-swiper").eq(i).css("height");
        };
    }
    clearPageTimer(){  //清掉页面所有定时器，暂时不用
        for(var i = 1;i<=1000;i++){
            clearInterval(i);
        }
        for(var i = 1;i<=1000;i++){
            clearTimeout(i);
        }
    }
    setPointData(deData, type){  //显示点击量
        this.clicktype = type;
        for(let i = 0; i < deData.data.positionData.length; i++){
            let p = deData.data.positionData[i];
            if(p && p.id && p.id.value){
                let pointElem = $(`[data-spmd=${p.id.value}]`);
                let value = p[type].value;
                if(type == "clickRate"){
                    value = String(p[type].value).substring(0, 7);
                    value = String(Number(value)*100).substring(0, 7)  + "%";
                };
                if(pointElem && pointElem.find(".sycmDecorateDOMPoint").length){
                    pointElem.find(".sycmDecorateDOMPoint").text(value);
                }else{
                    pointElem.append(`<div class="sycmDecorateDOMPoint" style="position: absolute;top:0;left:0; display: inline-block; padding: 5px 10px; font-size: 12px; color: rgb(255, 255, 255); z-index: 9999999; background-color:#ff5722;">${value}</div>`);
                };
            }
        }
        for(let i = 0; i < deData.data.blockData.length; i++){
            let p = deData.data.blockData[i];
            if(p && p.id && p.id.value){
                let widArr = (p.id.value || "").split("_");
                let wid = widArr[widArr.length - 1];
                if(wid){
                    let elem = $(`#floorId-${wid}`);
                    if(elem){
                        let wrapper = elem.find(".module-wrapper");
                        let value = p[type].value;
                        if(type == "clickRate"){
                            value = String(p[type].value).substring(0, 7);
                            value = String(Number(value)*100).substring(0, 7) + "%";
                        }
                        if(wrapper.find(".sycmBlockPoint").length){
                            wrapper.find(".sycmBlockPoint .sycmDecorateSPMC").text("模块总点击："+value);
                        }else{
                            wrapper.append(`<div class="sycmBlockPoint" style="width: 100%;height: 100%;position: absolute;top:0;left:0;z-index: 99999999;pointer-events: none;border: 2px solid #03a9f4;box-sizing: border-box;"><div class="sycmDecorateSPMC" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 5px 10px; font-size: 12px; color: rgb(0, 0, 0); background: rgb(255, 255, 255); box-shadow: rgb(0, 0, 0) 0px 0px 10px; text-align: center; white-space: nowrap; z-index: 9999999;">模块总点击：${value}</div></div>`);
                        }
                    }

                }
            }
        }
    }
    getQueryString(url, name) {
        url = url.replace('?', '&');
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    setTaobaoPage(){
        let timer = setInterval(()=>{
            // JSON.parse(window.localStorage.shopheader_mtopfetch_cache)
            let _this = this;
            if($(".module-list-wrapper").eq(0)){
                var exportsButtonEle = '<button type="button" id="pageExport" class="next-btn next-medium next-btn-primary" style="color: #fff; margin-right: 10px;  position: absolute; z-index: 9999999999999999; background: none; right: 0; opacity: 0.5; border: 1px solid #eee; border-radius: 100px;top: 50px;"><span class="next-btn-helper">导出</span></button>';
                this.exportsButtonEle = $(exportsButtonEle);
                $(".rax-scrollview-webcontainer").find(".rax-view").eq(0).append(this.exportsButtonEle);
                this.exportsButtonEle.on("click", function(e){
                    _this.getPageData();
                    console.log('---------------------------', window.__vmGlobalData__)
                });
                clearInterval(timer)
            }
        }, 1000)
    }
    async getPageData(parm){
        
          // https://alisitecdn.m.taobao.com/minidata/shop/index/downgrade.htm?pathInfo=shop/index2&userId=2424298091&shopId=116845644&pageId=312268283
          let url = "https://alisitecdn.m.taobao.com/minidata/shop/index/downgrade.htm?pathInfo=shop/index2&userId=2360209412&shopId=115862174&pageId=312448595";
        //   let parm = {pathInfo:"shop/index2", userId:window.__vmGlobalData__.sellerId, shopId:window.__vmGlobalData__.shopId, pageId:window.__vmGlobalData__.pageId};
          let requestData = await this.getRequest(url,{});
          
          console.log(requestData)
    }
    exportModList(){   //导出isv模块名称
       let timer= setInterval(()=>{
            if($(".release_manage_container .release_header").length){
                $(".release_manage_container .release_header").append('<button id="gm-modexport" type="button" style="float: right;height: 36px; margin-top: 22px; vertical-align: middle; background: #f50; border-radius: 2px;margin-right: 5px;border-color: #f23c3c;color: #fff;border-style: solid;"><span class="next-btn-helper">export</span></button>');
                $("#gm-modexport").on("click", ()=>{
                    this.isvmodlist = {page:1, pageSize:100, data:[], len:0};
                    this.exportModListT();
                });
                clearInterval(timer)
            }
        }, 1000)
    }
    async exportModListT(){//导出isv模块名称
        let fetchData = (page)=>{
            return  new Promise(function(resolve, reject){
                fetch("https://isv-siteadmin.taobao.com/miniapp/isv/product/getIsvMiniappProductList?pageSize="+page.pageSize+"&currentPage="+page.page, { method: 'get',credentials: "include" }).then(function (res) {
                    res.json().then(function (item) {
                        resolve(item);
                    }).catch(function (item) {
                        resolve({success:false});
                    })
                })
            });
        };
        let data = await fetchData({page:this.isvmodlist.page, pageSize:this.isvmodlist.pageSize});
        if(data.success){
            if(!this.isvmodlist.totalCount){
                this.isvmodlist.totalCount = data.totalCount;
            };
            let nameArr = [];
            for(let i = 0, l = data.result.length; i < l;i++){
                let name = data.result[i].name;
                if(name){
                    name = name.substring(0,6);
                    if(this.config.gmMiniName.indexOf(name) > -1){}else{  //去掉本地已经存在的模块名称
                        nameArr.push(name);
                    }
                }
            }
            this.isvmodlist.data = this.isvmodlist.data.concat(nameArr);
            this.isvmodlist.len+=data.result.length;
            if(data.totalCount - this.isvmodlist.len <=0){  //获取完成
                $("body").append('<div style="position:absolute;top:0;left:0;z-index:999999"><textarea id="gmnodeName_list" ></textarea></div>');
                $("#gmnodeName_list").val(this.isvmodlist.data.join(","));
                return 
            }else{  //继续获取
                if(data.totalCount - this.isvmodlist.len < this.isvmodlist.pageSize){
                    this.isvmodlist.pageSize = data.totalCount - this.isvmodlist.len;
                }
                this.isvmodlist.page+=1;
                this.exportModListT();
            }
        }
    }
    pageImport(){
        
    }
    pageExport(){
        
    }
    //DES加密
    onedesmodlist(message, key){
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.ciphertext.toString();
    }
    
    postPageModeList(){
        let me = this;
        setTimeout(()=>{
            let globalDataText = $('#crx').html(); 
            $('#crx').remove();
            me.config.globalData = JSON.parse(globalDataText);
            this.getIsvModeList();
        }, 500)
    }
    postPageModeListTwo(){
        let one = 'rjkjmkdz123';
        console.log(this.config.globalData);
        let globalData = this.config.globalData || null;
        if(globalData && globalData.shopId){
            let oldlen = window.localStorage.getItem("rjke-mode-len");
            let expireStatusLen = 0;
            this.isvModeData.forEach((v)=>{
                if(v && (v.expireStatus == -1 || v.expireStatus == 1)){
                    expireStatusLen+=1;
                }
            })
            window.localStorage.setItem("rjke-mode-len", expireStatusLen);
            let data =  {shopId:globalData.shopId, shopName:globalData.shopTitle, action:"update"}
            if(oldlen != expireStatusLen){  data.change = true;}//过去数据发生改变
            let str = JSON.stringify(this.isvModeData)
            let modlist = this.onedesmodlist(str, one);
            data.modlist = modlist;
//             chrome.runtime.sendMessage('', {message: "post_list", data:data}, function (res) {});
              const cEvt = new CustomEvent('miniPostListEvent', { detail: data });
            // 触发事件
            document.dispatchEvent(cEvt)
        }
    }
    setDeleteBtn(){
        let elem = '<button type="button" class="delete-category-btndiy next-btn next-medium next-btn-primary" style="margin-left: 40px;background-color: rgba(255,147,0,0);color:#ff9800;font-size:12px;"><span class="next-btn-helper">删除页面</span></button>'
        $(".next-loading-wrap").find(".next-table-body").find("tr").children("td:last-child").find(".next-table-cell-wrapper").append(elem);
        $(".next-loading-wrap").find(".next-table-body").find("tr").eq(0).find(".delete-category-btndiy").remove();
        $(".next-loading-wrap").find(".next-table-body").find("tr").eq(1).find(".delete-category-btndiy").remove();
        let arr = $(".next-loading-wrap").find(".next-table-body").find("tr");
        for(let i = 0; i < arr.length; i++){
            let ch = arr.eq(i).find("td").eq(2).find("div").children("div")
            if(ch.length > 1){  //线上使用，不能删除
                arr.eq(i).find(".delete-category-btndiy").remove();
            }
        }
    }
    deleteCategory(){
        let _this = this;
        let timer = setTimeout(()=>{
            if($(".next-menu-selectable-single li").length){
                $(".next-menu-selectable-single li").on("click", function(e){
                    let elem = $(e.currentTarget)
                    if(elem.attr("title") == "宝贝分类"){
                        setTimeout(()=>{
                            _this.setDeleteBtn();
                        }, 1000)
                    }else{$(".next-loading-wrap .delete-category-btndiy").remove();}  //移出删除按钮
                })
                if($(".next-menu-selectable-single").find("li[active = 'active']").attr("title") == "宝贝分类"){
                    setTimeout(()=>{
                        _this.setDeleteBtn();
                    }, 1000)
                }
                $(".next-loading-wrap").on("click", ".delete-category-btndiy", function(e){
                    let r = confirm("确认删除该分类页面吗？（注：请勿删除线上使用的分类页面）");
                    if(!r){return }
                    let elem = $(e.currentTarget).parent();
                    let url2 = elem.find("div").find("a").attr("href");
                    if(url2){
                        let pageid = _this.getQueryString(url2, "pageId");
                        console.log(pageid)
                        if(pageid){
                            let _tb_token_ = document.getElementsByName("_tb_token_")[0].value;  
                            let url = "https://wangpu.taobao.com/wpApi.do";
                            let param = {_input_charset: "utf-8", _tb_token_: _tb_token_, pageId: pageid, path:"category", action:"page/WpPageAction", event_submit_do_Delete:true};
                            _this.getRequest(url,param).then((res)=>{
                                try{
                                    let data = JSON.parse(res);
                                    if(data.isSuccess){
                                        alert('删除成功，请刷新页面')
                                    }else{
                                        alert('删除失败，请确认页面id')
                                    }
                                }catch(e){alert('删除失败')};
                            }).catch((e)=>{alert('删除失败')});
                        }
                    }
                })
            }else{
                _this.deleteCategory()
            }
        }, 1000)
    }
    addDetailClick(){
        let _this = this;
        let back = function(){
            setTimeout(()=>{
                if($(".detail-editor-previewer-scale-inner .editor-component-row").length){
                    
                    $(".detail-editor-previewer-scale-inner .editor-component-row").on("click", function(e){
                        let elem = $(e.currentTarget);
                        if(!elem.find(".detail-rj-btndiy").length){
                            elem.append('<button type="button" class="detail-rj-btndiy next-btn next-medium next-btn-primary" style="margin-left: 40px;background-color: rgba(255,147,0,1);color:#333;font-size:12px;position: absolute;right: -68px;padding:9px;top: 160px;z-index: 99;"><span class="next-btn-helper">code</span></button>')
                        }
                        elem.siblings().find(".detail-rj-btndiy").remove();
                    })
                    $(".detail-editor-previewer-scale-inner .editor-component-row").on("click", ".detail-rj-btndiy", function(e){
                        let elem = $(e.currentTarget);
                        let index = elem.parent().index();
                        _this.getDetailModeList(index);
                       if(e.stopPropagation){e.stopPropagation()}
                    })
                }else{
                    back();
                }
            }, 300)
        } 
        back();
    }
    showDetailPageData(data){
        if(!data)return 
        let _this = this;
       $("body").append("<div id='editCodeid' style='position:fixed;top:0;left:0;z-index:999;background:rgba(0,0,0,0.6);width:100%;height:100%'><textarea id='editCodeidtext' style='width: 500px;height: 300px;margin: auto; display: block;margin-top: 200px;'></textarea><button id='sureeditdiy' style='margin: auto;margin-top: 10px;display: block;padding: 4px 20px;'>导入</botton><button id='canceleditdiy' style='margin: auto;margin-top: 10px;display: block;padding: 4px 20px;'>取消</botton></div>")
        let str = JSON.stringify(data);
        $("#editCodeid").find("#editCodeidtext").val(str);
        $("#editCodeid #canceleditdiy").on("click", function(){
            $("#editCodeid").remove();
        })
        $("#editCodeid #sureeditdiy").on("click", function(){
            // $("#editCodeid").remove();
            _this.saveDetailMode()
        })
    }
    saveDetailMode(){
        let url = "https://wangpu.taobao.com/detaildecorate/ajax/ajax.do?";
        let item = this.delmoduleList[this.delIndex] || null;
        if(!item){return }
        let r = confirm("请导入相同模块的代码，避免渲染出错； 确定导入该代码？");
        if(!r){return};
        let pageId = this.getQueryString(location.href, "pageId");
        let shopId = this.getQueryString(location.href, "shopId");
        let md = $("#editCodeid").find("#editCodeidtext").val();
        try{
            let moduleData = md;
            let data = {
                moduleData:moduleData,
                widgetId: item.widgetId,
                action: "DetailModuleDecorateAction",
                event_submit_do_save: true,
                componentId: item.componentId,
                pageId: pageId,
                _input_charset: "utf-8",
                shopId: shopId,
                _tb_token_: this.config.token
            }
             this.postRequest(url,data).then((res)=>{
                    try{
                        let data = res;
                        if(typeof(res) == 'string'){
                            data = JSON.parse(res);
                        }
                        if(data.isSuccess){
                            location.reload();
                        }
                    }catch(e){};
            }).catch((e)=>{});
        }catch(e){
            alert(e)
        }
        
    }
    getDetailModeList(index){
        // https://wangpu.taobao.com/detaildecorate/ajax/getModuleData.do?shopId=72531585&pageId=190485922&_input_charset=utf-8&_tb_token_=ee9333e757863
        let _tb_token_ = this.config.token;  
        let pageId = this.getQueryString(location.href, "pageId");
        let shopId = this.getQueryString(location.href, "shopId");
        let url = "https://wangpu.taobao.com/detaildecorate/ajax/getModuleData.do";
        let param = {_input_charset: "utf-8", _tb_token_: _tb_token_, pageId: pageId, shopId:shopId};
        let _this = this;
        _this.getRequest(url,param).then((res)=>{
            try{
                let data = res;
                if(typeof(res) == 'string'){
                    data = JSON.parse(res);
                }
                if(data.isSuccess){
                    _this.delmoduleList = data.data.moduleList || [];
                    console.log(_this.delmoduleList[index])
                    let mdata = _this.delmoduleList[index]?_this.delmoduleList[index].moduleData:null;
                    _this.delIndex = index;
                    _this.showDetailPageData(mdata)
                }
            }catch(e){};
        }).catch((e)=>{});
    }
    //初始化
    async init(){
        if(this.isSycm){//生意参谋环境             
            this.setSycmPage();
            return
        }
        
        if(this.isHome){ //设置分类页面可删除
            this.deleteCategory();
            this.postPageModeList();
            return 
        }
        if(this.isWeexDetail){
            let _this = this;
            setTimeout(()=>{
                let globalDataText = $('#crx').html();
                let token = $('#detoken').html();
                $('#detoken').remove();$('#crx').remove();
                try{
                    _this.config.globalData = JSON.parse(globalDataText);
                    _this.config.token = token;
                    _this.addDetailClick();
                }catch(e){}
            }, 500)
           
            return 
        }
        // if(this.isTaobaoPage){
        //      //手淘浏览器首页   
        //      console.log("setTaobaoPage")
        //      this.setTaobaoPage();
        //      return
        // }
        if(this.isSycmPageDetail){
            //生意参谋打开的首页页面
            this.initSycmPageDetail();
            window.onbeforeunload = function () {
                return confirm('建议不要跳转其他网页，不要关闭此网页');
            };
            return 
        }
        if(this.isIsv){
            this.exportModList();
            return 
        }
        let _this = this;
        window.addEventListener("message", function( e ) {
            if(e.data.popupEvent){
               if(e.data.popupEvent.type=='minimoduleName'){
                    let nameData = e.data.popupEvent.nameData;
                    if(nameData.success && nameData.data && nameData.data.data){
                        _this.config.gmMiniName += nameData.data.data;
                    }
                }else if(e.data.popupEvent.type=='importcodemini'){
                    _this.pageImport();
                }else if(e.data.popupEvent.type == "exportcodemini"){
                    _this.pageExport();
                }
            }
        }, true );

        let isLoading = await this.loading();
        if(!isLoading.success){   clog('插件加载失败')}
        //执行逻辑部分
        //读取参数
        let ParamRes = await this.getParam();
        if(!ParamRes.success){ clog('参数加载失败')}
        console.log(this.config)
       
        this.domInit(); 
        // this.getModuleData();
        // let res = await this.getWpGetModuleFormSchema();

    }
}


window.miniMod = new miniModule();



