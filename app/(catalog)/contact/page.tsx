const ContactUs = () => {
  return (
    <div className="max-w-[1140px] mx-auto stage1:pt-[13rem] stage2:pt-[15rem] stage3:pt-[17rem] stage4:pt-[20rem] sm:pt-[22rem] md:pt-[20rem] lg:pt-[21rem]">
      <div>
        <h1 className="prompt-bold pt-4 xs:text-[24px] sm:text-[24px] md:text-2xl px-6 sm:px-6 md:px-6 lg:px-6 xl:px-0">
          ติดต่อเรา
        </h1>
        <h1 className="prompt-bold pt-4 xs:text-[24px] sm:text-[24px] md:text-2xl px-6 sm:px-6 md:px-6 lg:px-6 xl:px-0">
          Location
        </h1>
        <div className="max-w-[1140px] mx-auto flex justify-center">
          <iframe
            className="border-2 w-[600px] h-[350px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62011.839752362794!2d100.65572489036329!3d13.734185797458192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d65c7426ed637%3A0x4e61da2386e945a0!2z4Lij4LmJ4Liy4LiZ4Lia4LmJ4Liy4LiZ4Lia4Li44LiN4LiL4Li44Lib4LmA4Lib4Lit4Lij4LmM4Liq4LmC4LiV4Lij4LmM!5e0!3m2!1sth!2sth!4v1720308895655!5m2!1sth!2sth"
            loading="lazy"
          />
        </div>
      </div>
      <div className="pb-96"></div>
    </div>
  );
};

export default ContactUs;
