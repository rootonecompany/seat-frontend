"use client";
import React from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

const Auth = () => {
  const subscribeItemClickHandler = (e: any) => {
    const date = new Date();
    const check = "TicketPang" + date;
    var IMP = window.IMP;
    IMP.init("imp89563591"); // iamport 가맹점 식별코드
    IMP.request_pay(
      {
        pg: "kcp_billing",
        pay_method: "card", // 'card'만 지원됩니다.
        merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
        name: "최초인증결제",
        amount: 500, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다. (PC에서는 가격이 표시되지 않음)
        customer_uid: "your-customer-unique-id", // 필수 입력.
        buyer_email: "iamport@siot.do",
        buyer_name: "아임포트",
        buyer_tel: "02-1234-1234",
        m_redirect_url: "http://localhost:3000", // 예: https://www.my-service.com/payments/complete/mobile
      },
      function (rsp: any) {
        if (rsp.success) {
          alert("빌링키 발급 성공");
        } else {
          alert("빌링키 발급 실패");
        }
      }
    );
    // IMP.certification(
    //   {
    //     pg: "088", //본인인증 설정이 2개이상 되어 있는 경우 필
    //     merchant_uid: check,
    //     m_redirect_url: "http://localhost:3000",
    //     popup: false,
    //   },
    //   (rsp: any) => {
    //     console.log("response", rsp);
    //     if (rsp.success) {
    //       alert("성공");
    //     } else {
    //       alert("실패");
    //     }
    //   }
    // );
  };

  return (
    <div onClick={subscribeItemClickHandler} style={{ cursor: "pointer" }}>
      Auth
    </div>
  );
};

export default Auth;
