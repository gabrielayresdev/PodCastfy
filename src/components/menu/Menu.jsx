import React from "react";
import styles from "./Menu.module.scss";
import AddButton from "./AddButton";

/* imports do Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";

const Menu = () => {
  return (
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
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <AddButton />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Menu;
