using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index(string id,string name,string title)
        {
            ViewBag.ID = id;
            List<Models.Album> list = new List<Models.Album>();


            var item = new Models.Album();
            item.Name = "廖華聖";
            item.Number = "1103105305";
            item.Say = "將軍，字面意思就是率領軍隊。夏商周時期，天子統率的部隊分為六軍，每軍約一萬二千五百人。到了春秋時期，諸侯制大國三軍、次國二軍、小國一軍，晉國魏獻子自己統領一支軍隊，稱「將軍」。";
            item.Picture = "/picture/1.jpg";
            item.facebook_link = "https://www.facebook.com/profile.php?id=100002570302312";
            list.Add(item);

            var item2 = new Models.Album();
            item2.Name = "林佑恩";
            item2.Number = "1103105336";
            item2.Say = "先別管這些了，你有聽過安麗嗎？";
            item2.Picture = "/picture/2.jpg";
            item2.facebook_link = "https://www.facebook.com/profile.php?id=100002288875969";
            list.Add(item2);

            var item3 = new Models.Album();
            item3.Name = "陳政穎";
            item3.Number = "1103105342";
            item3.Say = "長頸鹿的熱咖啡，在流到他的喉嚨的時候，熱咖啡早就冷掉了。 你有想過這個嗎? 沒有!!!因為你只會想到你自己";
            item3.Picture = "/picture/3.jpg";
            item3.facebook_link = "https://www.facebook.com/zing.chen.5";
            list.Add(item3);

            var item4 = new Models.Album();
            item4.Name = "林敬宗";
            item4.Number = "1103105310";
            item4.Say = "天下無奇不有，連「牛糞」也有人要偷！英國懷特島（Isle of Wight）動物園內的「國家大便博物館」（The National Poo Museum）發生竊案，準備在巡迴展覽中展示的「牛糞」竟不翼而飛，連館方都猜想不到竊賊的動機是什麼。";
            item4.Picture = "/picture/4.jpg";
            item4.facebook_link = "https://www.facebook.com/profile.php?id=100000449332604";
            list.Add(item4);

            var item5 = new Models.Album();
            item5.Name = "許庭章";
            item5.Number = "1103105331";
            item5.Say = "大包小包準備滾回高雄。繼續吃喝玩樂嘻嘻哈哈。當然最重要的是認真讀書😏😏😏 #連假尾聲#再見我的家鄉 #高雄我來了#大三新生活 #我是老屁股#快樂讀書趣";
            item5.Picture = "/picture/5.jpg";
            item5.facebook_link = "https://www.facebook.com/tingchang.hsu";
            list.Add(item5);

            var item6 = new Models.Album();
            item6.Name = "李淑燕";
            item6.Number = "1103105382";
            item6.Picture = "/picture/6.jpg";
            item6.facebook_link = "https://www.facebook.com/shuyan.li.3";
            list.Add(item6);

            var item7 = new Models.Album();
            item7.Name = "連結";
            item7.Number = "07";
            item7.Picture = "";
            list.Add(item7);

            var item8 = new Models.Album();
            item8.Name = "相片集";
            item8.Number = "08";
            item8.Picture = "";
            list.Add(item8);

            ViewBag.ListDatas = list;

            return View();
            //return Content("<h1>hello world</h1>" + id);
        }
    }
}