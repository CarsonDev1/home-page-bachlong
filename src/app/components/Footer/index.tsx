"use client";
import React from "react";
import Section from "../Section";
import Container from "../Container";
import Select from "react-select";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white">
        <Section>
          <Container>
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col gap-2">
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Giới thiệu Bạch Long Mobile</span>
                </Link>
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Giới thiệu Bạch Long Care</span>
                </Link>
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Hướng dẫn mua hàng Online</span>
                </Link>
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Quy Trình Giao Hàng</span>
                </Link>
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Tuyển dụng</span>
                </Link>
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Liên hệ</span>
                </Link>
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Chính sách bảo hành</span>
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Trả góp 0% lãi suất</span>
                </Link>
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Đổi cũ lấy mới</span>
                </Link>
                <Link href="#">
                  <span className="hover:text-primary transition-all text-xs md:text-sm">Chính sách bảo mật</span>
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="mb-2 text-sm md:text-base lg:text-xl font-semibold">Thông tin liên hệ</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm">Mua hàng:</span>
                    <Link href="tel:1900636469">
                      <span className="text-blue-500 font-semibold">1900.63.64.69</span>
                    </Link>
                    <span>( 8h00 - 21h30 )</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Bảo hành:</span>
                    <Link href="tel:1900636981">
                      <span className="text-blue-500 font-semibold">1900.63.69.81</span>
                    </Link>
                    <span>( 9h00 - 18h30 )</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm">Khiếu nại:</span>
                    <Link href="tel:0909090909">
                      <span className="text-blue-500 font-semibold">0938.038.038</span>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm">Hợp tác kinh doanh:</span>
                    <Link href="tel:0909090909">
                      <span className="text-blue-500 font-semibold">0908.038.038</span>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm">Email:</span>
                    <Link href="tel:0909090909">
                      <span className="text-blue-500 font-semibold">director@bachlongmobile.com</span>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="mb-2">Cửa hàng gần bạn</span>
                  <Select
                    options={[
                      { value: "store1", label: "Store 1" },
                      { value: "store2", label: "Store 2" },
                      { value: "store3", label: "Store 3" },
                    ]}
                    placeholder="Bạch Long Mobile"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        border: "none",
                        boxShadow: "none",
                        backgroundColor: "",
                      }),
                      indicatorSeparator: () => ({
                        display: "none",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "white",
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        color: "black",
                        backgroundColor: state.isSelected ? "transparent" : state.isFocused ? "transparent" : provided.backgroundColor,
                        "&:hover": {
                          backgroundColor: "#ebf0fb",
                        },
                      }),
                    }}
                    className="bg-[#0f172a] text-white font-bold rounded-md text-xs"
                  />
                  <Select
                    options={[
                      { value: "store1", label: "Store 1" },
                      { value: "store2", label: "Store 2" },
                      { value: "store3", label: "Store 3" },
                    ]}
                    placeholder="Bạch Long Care"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        border: "none",
                        boxShadow: "none",
                        backgroundColor: "",
                      }),
                      indicatorSeparator: () => ({
                        display: "none",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "white",
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        color: "black",
                        backgroundColor: state.isSelected ? "transparent" : state.isFocused ? "transparent" : provided.backgroundColor,
                        "&:hover": {
                          backgroundColor: "#ebf0fb",
                        },
                      }),
                    }}
                    className="bg-[#0f172a] text-white font-bold rounded-md text-xs"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="mb-2">Kết nối với chúng tôi</span>
                  <div className="flex items-center gap-2">
                    <Link href="#">
                      <Image src="/footer-icon-01.png" alt="facebook" width={50} height={50} className="size-7 rounded-full" />
                    </Link>
                    <Link href="#">
                      <Image src="/footer-icon-02.png" alt="facebook" width={50} height={50} className="size-7 rounded-full" />
                    </Link>
                    <Link href="#">
                      <Image src="/footer-icon-03.png" alt="facebook" width={50} height={50} className="size-7 rounded-full" />
                    </Link>
                    <Link href="#">
                      <Image src="/footer-icon-04.png" alt="facebook" width={50} height={50} className="size-7 rounded-full" />
                    </Link>
                    <Link href="#">
                      <Image src="/footer-icon-05.png" alt="facebook" width={50} height={50} className="size-7 rounded-full" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="mb-2">Cửa hàng gần bạn</span>

                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>
      <div className="bg-[#f1f5f9]">
        <Section>
          <Container>
            <span className="text-sm">© 2019. Công ty TNHH Thương mại công nghệ Bạch Long - GPDKKD: 0311767538 do sở KH & ĐT TP.HCM cấp ngày 03/05/2012
              134 - 136 Trần Phú, Phường 4, Quận 5, TP HCM</span>
          </Container>
        </Section>
      </div>
    </div>
  );
};

export default Footer;
