import React from "react";
import Footer from "./Footer";
import Navbar from "./NavbarLink";

function Regulations() {
  return (
    <section id='RegulaminSesji' className='Bg flex flex-col w-screen'>
      {/*  */}
      <Navbar />
      <div className=' h-[230px] md:mt-10 mt-14 bg-blue-100 flex items-center justify-center'>
        <h1 className='text-center px-10  text-4xl tracking-[5px] font-light text-titleGray'>Regulamin Sesji</h1>
      </div>
      <div className='flex w-[90%] flex-col space-y-12 mx-auto max-w-[1080px] pt-16 mt h-auto justify-center items-center mb-32'>
        <p className='text-2xl font-bold text-center'>1. Postanowienia ogólne</p>
        <p>
          1. Każdy Klient ma obowiązek zapoznania się z regulaminem przed zleceniem.
          <br />
          2. Decyzja o skorzystaniu z usług fotografa jest równoznaczna z akceptacją wszystkiego, co ten regulamin
          zawiera.
          <br />
        </p>

        <p className='text-2xl font-bold text-center'>2. Udostępnienie danych osobowych</p>
        <p>
          Klient musi powierzyć mi swoje imię i nazwisko, adres mailowy oraz nr telefonu w celu umożliwienia kontaktu w
          sprawach dotyczących moich usług, np. przesłanie folderu ze zdjęciami do wyboru.
          <br /> Dane nie są przekazywane innym podmiotom.
          <br /> Podając swoje dane zgadzają się na przetwarzanie ich przeze mnie w ramach moich usług.
        </p>

        <p className='text-2xl font-bold text-center'>3. Terminy sesji i zasady</p>
        <p>
          Klient zobowiązany jest do zapoznania się z portfolio Fotografa, jego stylem obróbki i pracy.
          <br /> Klient nie może oczekiwać od Fotografa wykonania dzieła niezgodnego z jego poczuciem estetyki oraz
          niezgodnego ze stylem Fotografa, np. z kolorystyką czy kontrastem.
          <br />
          <br />
          Fotograf ma prawo do zmiany terminu sesji z powodu choroby, nagłego wypadku lub złej pogody w przypadku sesji
          plenerowych. Szczegóły sesji ustalane są indywidualnie.
        </p>

        <p className='text-2xl font-bold text-center'>4. Otrzymanie zdjęć</p>
        <p>
          Klient otrzymuje dokładnie taką ilość fotografii, jaką zakupił.
          <br />
          <br /> Klient może zakupić dodatkowe ujęcia zgodnie z podanym cennikiem.
          <br />
          <br /> Termin oczekiwania na galerię ze zdjęciami do wyboru wynosi maksymalnie 14 dni roboczych od dnia sesji.
          <br />
          <br /> Wszystkie zdjęcia są obrobione i dostarczane w formie cyfrowej.
        </p>

        <p className='text-2xl font-bold text-center'>5. Ogólne warunki sesji</p>
        <p>
          Na sesję zdjęciową należy przyjść punktualnie.
          <br />
          <br /> W przypadku spóźnienia lub niemożliwości dotarcia należy uprzedzić Fotografa o zaistniałej sytuacji
          przynajmniej 30 minut przed umówioną godziną sesji.
          <br />
          <br /> Klient jest odpowiedzialny za swojego zwierzaka podczas sesji.
          <br />
          <br /> Klient zobowiązany jest do zapewnienia odpowiednich warunków do przeprowadzenia sesji, w tym dostępu do
          miejsc płatnych (bilet wstępu czy zezwolenie na fotografowanie).
        </p>

        <p className='text-2xl font-bold text-center'>6. Zgoda na publikacje i prawa autorskie</p>
        <p>
          Każdy Klient ma prawo zdecydować, czy pozwala Fotografowi na publikację jego zdjęć w różnych mediach i
          materiałach reklamowych.
          <br />
          <br />
          Zgoda na publikację zdjęć jest dobrowolna i może być cofnięta w dowolnym momencie.
          <br /> <br />
          Prawa autorskie do zdjęć należą do Fotografa.
        </p>

        <p className='text-2xl font-bold text-center'>7. Postanowienia końcowe</p>
        <p>
          1. Regulamin Sesji może ulec zmianie, o czym Klienci zostaną poinformowani.
          <br />
          2. W sprawach nieuregulowanych niniejszym regulaminem obowiązują przepisy prawa polskiego.
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default Regulations;
