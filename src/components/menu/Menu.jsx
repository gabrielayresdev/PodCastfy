import React from "react";
import styles from "./Menu.module.scss";
import AddButton from "./AddButton";

import PodcastIcon from "./PodcastIcon";
import { GlobalContext } from "../../contexts/GlobalContext";

/* imports do Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Search from "../modal/search";

const Menu = () => {
  const { state } = React.useContext(GlobalContext);
  const [modal, setModal] = React.useState(false);
  return (
    <>
      {modal && <Search setModal={setModal} />}
      <div className={styles.menu}>
        <Swiper
          direction={window.screen.width > 1024 ? "vertical" : "horizontal"}
          slidesPerView={"auto"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className="mySwiper"
          spaceBetween={"8px"}
        >
          {state
            ? state.map((id) => (
                <SwiperSlide key={id} className={styles["swiper-slide"]}>
                  <PodcastIcon id={id} />
                </SwiperSlide>
              ))
            : null}
          {/* <SwiperSlide className={styles["swiper-slide"]}>
          <PodcastIcon id={""} />
        </SwiperSlide> */}
          <SwiperSlide
            className={styles["swiper-slide"]}
            onClick={() => setModal(true)}
          >
            <AddButton />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Menu;
