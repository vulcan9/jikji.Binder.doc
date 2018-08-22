/**
 * Created by dongil on 2016-07-14.
 */

/*
 markdown 문법 :
 https://gist.github.com/ihoneymon/652be052a0727ad59601
 https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
 */
(function(){
})();
(function(){
    var WIN = nw.Window.get();
    var Menu = nw.Menu;
    var MenuItem = nw.MenuItem;

    var menu = new Menu({ type: 'menubar' });

    function appendMenu(menu, item){
        //menu.append(new MenuItem({ label: label, submenu: submenu }));
        menu.append(new MenuItem(item));
    }

    var submenu_ref = new Menu();
    appendMenu(submenu_ref, {
        label: 'API Reference',
        //key: "s", modifiers: "ctrl-alt",
        click: function(){mdChange('ver/API.md');}
    });
    appendMenu(submenu_ref, { type: 'separator' });
    appendMenu(submenu_ref, {
        label: 'API Reference (ver 0.4)',
        click: function(){mdChange('ver/API.0.4.md', '0.4');}
    });
    appendMenu(submenu_ref, {
        label: 'API Reference (ver 0.3)',
        click: function(){mdChange('ver/API.0.3.md', '0.3');}
    });
    appendMenu(submenu_ref, {
        label: 'API Reference (ver 0.2)',
        click: function(){mdChange('ver/API.0.2.md', '0.2');}
    });

    //--------------------------

    var submenu_guide = new Menu();
    appendMenu(submenu_guide, {
        label: 'Html에서 API 사용하기',
        click: function(){mdChange('guide/guideHtml.md');}
    });
    appendMenu(submenu_guide, {
        label: 'Flash에서 API 사용하기',
        click: function(){mdChange('guide/guideFlash.md');}
    });
    appendMenu(submenu_guide, {
        label: '녹음 기능 참고사항',
        click: function(){mdChange('guide/guideRecord.md');}
    });
    appendMenu(submenu_guide, {
        label: '분권, 통권 구분하여 링크 걸기',
        click: function(){mdChange('guide/guideBookbinding.md');}
    });
    appendMenu(submenu_guide, {
        label: '새로운 APP ID 지정하기',
        click: function(){browser('https://github.com/vulcan9/jik-ji-Binder/wiki/Jik-ji-Binder-%EC%83%88%EB%A1%9C%EC%9A%B4-APP-ID-%EC%A7%80%EC%A0%95%ED%95%98%EA%B8%B0');}
    });


    //--------------------------

    var submenuVer = new Menu();

    appendMenu(submenuVer, {
        label: 'History',
        click: function(){mdChange('ver/history.txt');}
    });

    //---------- Release
    appendMenu(submenuVer, { type: 'separator' });
    appendMenu(submenuVer, {
        label: 'Release Note (ver 0.4)',
        click: function(){mdChange('ver/release_0.4.md');}
    });
    appendMenu(submenuVer, {
        label: 'Release Note (ver 0.3)',
        click: function(){mdChange('ver/release_0.3.md');}
    });
    appendMenu(submenuVer, {
        label: 'Release Note (ver 0.2)',
        click: function(){mdChange('ver/release_0.2.md');}
    });

    //---------- Migration

    appendMenu(submenuVer, { type: 'separator' });
    appendMenu(submenuVer, {
        label: 'Migration (ver 0.2)',
        click: function(){mdChange('ver/migration_0.2.md');}
    });
    appendMenu(submenuVer, {
        label: 'Migration (ver 0.1)',
        click: function(){mdChange('ver/migration_0.1.md');}
    });


    //--------------------------

    var submenu_demo = new Menu();
    appendMenu(submenu_demo, {
        label: 'Html Demo (새창)',
        click: function(){pageChange('/resource/html/index.html');}
    });
    appendMenu(submenu_demo, {
        label: 'Flash Demo (새창)',
        //key: "s", modifiers: "ctrl-alt",
        click: function(){pageChange('/resource/flash/index.html');}
    });

    //--------------------------

    appendMenu(menu, { label: 'Reference', submenu: submenu_ref });
    appendMenu(menu, { label: 'Document', submenu: submenu_guide });
    appendMenu(menu, { label: 'Version', submenu: submenuVer });
    appendMenu(menu, { label: 'Demo', submenu: submenu_demo });
    WIN.menu = menu;

    function mdChange(file, version, target){
        target = target || '_self';
        jj.link.html('./index.html', target, {parameter: {file:file, version: version}});
    }
    function pageChange(url){
        jj.link.html(url, 'demo_window', {});
    }
    function browser(url){
        jj.link.html(url);
    }
})();
