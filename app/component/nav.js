
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-gradient py-3">
        <div class="container-fluid mx-auto">
          <a class="navbar-brand" >


          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav" >
              <li class="nav-item">
                <Link href="/" class="nav-link"><i class="bi bi-send"></i> หน้าเเรก </Link>
              </li>
              <li class="nav-item">
                <Link href="/about" class="nav-link"><i class="bi bi-send"></i> เกี่ยวกับ </Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-person-square"></i> บริการ
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="index.html#general-boat-section">ประเภทของเรือ</a></li>


                  <li><a class="dropdown-item" href="wiki3.html">ช่วยเหลือ</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link href="/" class="nav-link"><i class="bi bi-send"></i> ติดต่อ </Link>
              </li>
            </ul>
            <button class="btn btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#loginmodal" onclick="redirectToOtherPage()">
              <i class="bi bi-file-lock"></i> Login
            </button>
          </div>
        </div>
      </nav>

    </>
  );
}
