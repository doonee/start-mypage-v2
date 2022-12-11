import React from 'react'
import SignupForm from './SignupForm';

export default function Signup() {
  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">
        <h2 className="h2">회원가입</h2>
        <div className="col-md-7 mt-md-0">
          <p className="text-muted text-center"><small>소설을 통한 가입과 일반가입 중 선택할 수 있습니다.</small></p>
          <div className="col-12 mt-2">
            <SignupForm />
          </div >
        </div>
      </div>
    </section>
  );
}
