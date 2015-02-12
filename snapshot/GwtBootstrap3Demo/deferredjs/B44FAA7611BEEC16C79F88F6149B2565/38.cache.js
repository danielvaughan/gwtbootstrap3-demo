$wnd.GwtBootstrap3Demo.runAsyncCallback38("function hzc(){}\nfunction lzc(){}\nfunction nzc(){}\nfunction ozc(){ozc=m6;kzc=new nzc}\nfunction gzc(){ryb(this,izc(new jzc))}\nfunction Egc(a){$mb.call(this,a);Dgc(this)}\nfunction azc(a,b,c){Ixb();cyb.call(this,a,b,c,(Zgc(),Ygc))}\nfunction jzc(){this.a=(new lzc,ozc(),kzc);mzc(this.a)}\nfunction XBc(a){var b;if(!a.F){b=new gzc(new hzc);a.F=b}return a.F}\nfunction WBc(a){var b;if(!a.D){b=new azc(hxb(Gyb(a.a)),XBc(a),VBc(a));Axb((Jyb(a.a),b),Vyb(Jyb(a.a)));a.D=b}return a.D}\nfunction mzc(a){if(!a.a){a.a=true;yu((yA(),'.GPBYFDEHL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEIL{margin-top:0 !important;}.GPBYFDEJL{margin-left:5px;}'));return true}return false}\nfunction izc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new GUb;TOb(a,(b=new bRb(y2c),TOb(b,(c=new zTb,c.a='Offline',yTb(c),c)),TOb(b,(d=new QPb,TOb(d,(e=new JRb((Z0b(),W0b)),jab((zhb(),e.db),'GPBYFDEIL',true),Rgc(e.b,q8c),UOb(e,e.b,0),e)),TOb(d,new Lgc((j=new yEb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new g8(j.a)).a)),TOb(d,(f=new PHc,xUb(f,(k=new yEb,k.a+=r8c,new g8(k.a)).a),jab(f.db,D2c,true),f)),TOb(d,new Lgc((l=new yEb,l.a+=s8c,new g8(l.a)).a)),TOb(d,(g=new PHc,xUb(g,(m=new yEb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new g8(m.a)).a),jab(g.db,D2c,true),g)),jab(d.db,'GPBYFDEHL',true),d)),TOb(b,(h=new LTb,TOb(h,(n=new $Tb,TOb(n,(o=new JRb(V0b),Rgc(o.b,'What is Offline?'),UOb(o,o.b,0),o)),n)),TOb(h,(p=new NTb,TOb(p,new Egc((q=new yEb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new g8(q.a)).a)),p)),TOb(h,new XTb),h)),TOb(b,(i=new LTb,TOb(i,(r=new $Tb,TOb(r,(s=new JRb(V0b),Rgc(s.b,'How to configure?'),UOb(s,s.b,0),s)),r)),TOb(i,(t=new NTb,TOb(t,new Lgc((u=new yEb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new g8(u.a)).a)),TOb(t,(v=new PHc,xUb(v,(w=new yEb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new g8(w.a)).a),jab(v.db,D2c,true),v)),TOb(t,new Lgc((A=new yEb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new g8(A.a)).a)),TOb(t,(B=new PHc,xUb(B,(C=new yEb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new g8(C.a)).a),jab(B.db,D2c,true),B)),TOb(t,new Lgc((D=new yEb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new g8(D.a)).a)),TOb(t,(F=new PHc,xUb(F,(G=new yEb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new g8(G.a)).a),jab(F.db,D2c,true),F)),t)),TOb(i,new XTb),i)),b));return a}\nl6(363,234,T0c,Egc);l6(811,47,I_c,azc);var y_=RCb(o2c,'OfflinePresenter',811);l6(1033,J_c,K_c,gzc);var D_=RCb(o2c,'OfflineView',1033);l6(1234,1,{},hzc);var C_=RCb(o2c,'OfflineView_BinderImpl',1234);l6(1235,1,{},jzc);var z_=RCb(o2c,'OfflineView_BinderImpl/Widgets',1235);l6(1522,1,{},lzc);var kzc;var B_=RCb(o2c,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1522);l6(1523,1,{},nzc);_.a=false;var A_=RCb(o2c,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1523);l6(737,1,Q1c);_.Ob=function kDc(){dAb(this.b,WBc(this.a.a))};yZc(im)(38);\n//# sourceURL=GwtBootstrap3Demo-38.js\n")
