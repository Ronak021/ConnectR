


import DailyQuote from "@/components/DailyQuote";

import MeetingTypeList from "@/components/MeetingTypeList";



const Home = () => {
  const now = new Date();

  // formating the real time and date
  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  const date = (new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">

      
    <MeetingTypeList />
      <div className="h-[290px] w-full rounded-[20px] bg-cover bg-dark-1" >
        <div className="flex h-full  justify-between max-md:px-5 max-md:py-8 lg:p-11">

          
            
          
          <div className="flex flex-col gap-2 py-6">
            {/* display real time date  */}
            <h1 className="text-4xl font-extrabold lg:text-6xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-1xl">{date}</p>
          </div>
          <div>
            {/* display quote */}
           <h2 className="py-6 text-center text-base font-normal rounded-[20px]">
          <DailyQuote /></h2> 
     
          </div>
          

        </div>
      </div>
      

    </section>
  );
};

export default Home;