import Navbar from '/app/component/nav';

export default function about() {
    return (
      <>
      <Navbar />
      <div class="row">
      <div class="col-lg-6 mx-auto about">
          <h2 class="text-center mb-4">sssเกี่ยวกับ Super Boat</h2>
          <img src="img/about.png" alt="รูปภาพของเรือ" class="img-fluid profile-pic mb-4"></img>
          <p>
              ยินดีต้อนรับสู่ Super Boat, แหล่งข้อมูลและบริการเรือที่ดีที่สุดของคุณ
              พวกเรามีพันธกิจที่จะให้ข้อมูลและบริการที่ดีที่สุดเกี่ยวกับเรือ
              เพื่อให้คุณได้ประสบการเดินเรือที่ยอดเยี่ยม
          </p>
          <p>
              ด้วยความหลงไหลในคุณภาพและนวัตกรรม เราพยายามที่จะนำเสนอข้อมูลล่าสุด
              เกี่ยวกับประเภทของเรือ ประวัติของเรือ และเคล็ดลับที่เป็นประโยชน์
              สำรวจเว็บไซต์ของเราเพื่อค้นพบโลกที่น่าทึ่งของเรือและเพิ่มความรู้ของคุณ
              
          </p>
        
          <a href="contact.html" class="btn btn-primary">ติดต่อเรา</a>
      </div>
      </div>
      </>
    );
  }
  