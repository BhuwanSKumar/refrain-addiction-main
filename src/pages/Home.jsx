import React from 'react';
import { Sidebar } from '../components';
import okk from '../assets/card__decoration_Stress.png';
import okkk from '../assets/card__note-decoration.png';
import './Home.css';
import moji1 from '../assets/comments__bubble-avatar-1.png';
import moji3 from '../assets/comments__bubble-avatar-2.png';
import moji5 from '../assets/comments__bubble-avatar-3.png';
import moji6 from '../assets/comments__bubble-avatar-4.png';

function Home() {
  return (
    <>

      <div className='flex'>
          <div className='h-screen sticky top-0'>
            < Sidebar />
          </div>
          <div style={{ position:"relative" , width: "800px", paddingTop:"4px", margin:"auto"  }}>
            <section class="hero">

            <img
              class="hero__image"
              src="./images/hero__image.svg"
              alt="hero"
            />
            <div class="hero__container">
              <div class="hero__container_left">
                <h1 class="hero__title">
                  Your mental health kit in the form of
                  <span class="underline"> therapy talks</span>
                </h1>
              </div>
              <div class="hero__container_right">
                <ul class="hero__list">
                  <li class="hero__paragraph">
                    Here you can listen to mental health podcasts.
                  </li>
                  <li class="hero__paragraph">
                    The content is available to those seeking guidance from
                    professionals who specialize in treating mental health
                    issues.
                  </li>
                  <li class="hero__paragraph">
                    We offers live sessions with doctors where you can ask
                    questions and get advice from people with similar health
                    problems.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div class="divider__container">
            <img class="divider" src="./images/divider.svg" alt="divider" />
          </div>

          <section class="">
            <h2 class="comments__title mt-8">Some Inspirational Stories 💭</h2>
            <div className="flex flex-wrap container mx-auto mb-12 ">
              <div className="mt-8 bg-blue-100 mx-4 border-solid border-2 border-blue-200 rounded-3xl p-3 w-80">
                <div className="flex text-blue-500 font-bold text-xl mb-2">
                  <img
                    className="h-10 w-9 ml-2 mr-2"
                    src={moji1}
                    alt="mojimem"
                  />
                  🥶Anonymous
                </div>
                <div>
                  Once lost in the dark abyss of addiction, I found the strength
                  within to break free. 🌟 With every step towards recovery, I
                  transformed into a resilient butterfly, embracing life's
                  beauty. 🦋 Today, I'm drug-free and grateful for the gift of a
                  second chance. 🌈🙌
                </div>
              </div>

              <div className="mt-8 bg-blue-100 mx-4 border-solid border-2 border-blue-200 rounded-3xl p-3 w-80">
                <div className="flex text-blue-500 font-bold text-xl mb-2">
                  <img
                    className="h-10 w-9 ml-2 mr-2"
                    src={moji3}
                    alt="mojimem"
                  />
                  Anonymous✨✅
                </div>
                <div>
                  From the ashes of despair, I rose like a phoenix. The battle
                  against drug addiction was tough, but I fought with unwavering
                  determination. Now, I bask in the warmth of sobriety,
                  embracing each day as a testament to my strength and
                  resilience. 🌟🌈
                </div>
              </div>

              <div className=" mt-8 bg-blue-100 mx-4 border-solid border-2 border-blue-200 rounded-3xl p-3 w-80">
                <div className="flex text-blue-500 font-bold text-xl mb-2">
                  <img
                    className="h-10 w-9 ml-2 mr-2"
                    src={moji5}
                    alt="mojimem"
                  />
                  Anonymous🚀
                </div>
                <div>
                  In the depths of addiction's prison, I discovered a hidden key
                  within myself. With self-love and unwavering faith, I unlocked
                  the shackles of substance abuse. Today, I am a living
                  testament to the power of inner strength and the limitless
                  possibilities of recovery. 💖🗝️🌟
                </div>
              </div>

              <div className=" mt-8 bg-blue-100 mx-4 border-solid border-2 border-blue-200 rounded-3xl p-3 w-80">
                <div className="flex text-blue-500 font-bold text-xl mb-2">
                  <img
                    className="h-10 w-9 ml-2 mr-2"
                    src={moji6}
                    alt="mojimem"
                  />
                  Anonymous😛
                </div>
                <div>
                  Like a fragile bud, I was trapped in addiction's darkness. But
                  I summoned courage, nurtured my spirit, and bloomed into a
                  radiant flower of sobriety. Life's vibrancy fills my heart,
                  and I celebrate each milestone with gratitude and love. 🌺🌈✨
                </div>
              </div>
            </div>
          </section>

          <div class="divider__container">
            <img class="divider" src="./images/divider.svg" alt="divider" />
          </div>

          <section class="tips" id="tips">
            <h2 class="tips__title">Let us recommend you</h2>
            <div class="tips__elements">
              <article class="card card_order">
                <div class="card__header">ORDER AT WORK</div>
                <div class="card__content-box">
                  <ul>
                    <li class="card__text">
                      Make sure you have a clear schedule on paper.
                    </li>
                    <li class="card__text">
                      Detect your main distracting elements.
                    </li>
                    <li class="card__text">Group your tasks into blocks.</li>
                    <li class="card__text">
                      Divide your day into several goals.
                    </li>
                    <li>Set clear limitations.</li>
                  </ul>
                </div>
                <div class="card__footer">
                  People with greater and better performance in the professional
                  context know how to manage the time dedicated to work
                </div>
              </article>

              <article class="card card_pomodoro">
                <div class="card__header">POMODORO TECHNIQUE</div>
                <div class="card__content-box">
                  <div class="card__note">
                    <div class="card__note-header">
                      <img src={okkk} alt="null" role="presentation" />
                      <span class="card__note-icon">✌🏻</span>
                      <span class="card__note-accent">Take note</span>
                    </div>
                    <ul class="card__note-list">
                      <li>Divide the day into the tasks you want to do.</li>
                      <li>Sort this list by priority.</li>
                      <li>Schedule your timer.</li>
                      <li>5 minute break.</li>
                    </ul>
                  </div>
                </div>
                <div class="card__footer">
                  This technique is a way to manage time, plan and execute tasks
                  to be more productive.
                </div>
              </article>

              <article class="card card_nutrition">
                <div class="card__header">FOOD TIPS</div>
                <div class="card__content-box">
                  <ul>
                    <li class="card__text">
                      Eat fruits, vegetables, and whole grains.
                    </li>
                    <li class="card__text">You avoid unhealthy fats.</li>
                    <li class="card__text">Consume Omega-3 fatty acids.</li>
                    <li class="card__text">
                      Learn about the risks and benefits of taking vitamins or
                      supplements
                    </li>
                    <li class="card__text">Watch your weight.</li>
                  </ul>
                </div>
                <div class="card__footer">
                  In simple terms, eating unhealthy foods, such as processed or
                  fast food, is very toxic to our body.
                </div>
              </article>

              <article class="card card_exercise">
                <div class="card__header">BEST EXERCISES</div>
                <div class="card__content-box">
                  <div class="card__note">
                    <div class="card__note-header">
                      <img src={okkk} alt="null" role="presentation" />
                      <span class="card__note-icon">🦾</span>
                      <span class="card__note-accent">TOP 5</span>
                    </div>
                    <ul class="card__note-list">
                      <li>Cardio and high intensity exercises.</li>
                      <li>Tai Chi for stress.</li>
                      <li>Boxing to burn the adrenaline.</li>
                      <li>Yoga to center your mind.</li>
                      <li>Swimming de-stresses and focuses you.</li>
                    </ul>
                  </div>
                </div>
                <div class="card__footer">
                  Whether moderate or vigorous, regular exercise offers
                  mood-boosting benefits.
                </div>
              </article>

              <article class="card card_stress">
                <div class="card__header">WORK STRESS</div>
                <div class="card__content-box">
                  <img
                    src={okk}
                    alt="stress"
                    class="card__decoration"
                    role="presentation"
                  />
                  <ul>
                    <li class="card__text">
                      Set Limits. Don't push yourself to exhaustion.
                    </li>
                    <li class="card__text">You can always ask for help.</li>
                    <li class="card__text">Disconnect from work.</li>
                    <li class="card__text">
                      Take care of your health and money.
                    </li>
                  </ul>
                </div>
                <div class="card__footer">
                  Burnout, called professional burnout syndrome, is the response
                  given by a person with strong physical and emotional
                  exhaustion.
                </div>
              </article>
            </div>
          </section>

          <div class="divider__container">
            <img class="divider" src="./images/divider.svg" alt="divider" />
          </div>

          <section class="podcast" id="podcast">
            <div class="podcast__container">
              <h2 class="podcast__title">Check out these Podcasts✨</h2>
              <article class="podcast__show">
                <iframe
                  src="https://open.spotify.com/embed/episode/1upfSt0Tdb0xHj0mRxNHc2?utm_source=generator&theme=0&t=0"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <div class="podcast__tags-container">
                  <div class="podcast__tags">HEALTH</div>
                  <div class="podcast__tags">SELF-ESTEEM</div>
                  <div class="podcast__tags">KNOWLEDGE</div>
                </div>
              </article>
              <article class="podcast__show">
                <iframe
                  src="https://open.spotify.com/embed/episode/4hUBzLOJOWQsdNM6RVLQKc?utm_source=generator&theme=0&t=0"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <div class="podcast__tags-container">
                  <div class="podcast__tags">TESTIMONIALS</div>
                  <div class="podcast__tags">REFLECTION</div>
                  <div class="podcast__tags">BEHAVIOR</div>
                </div>
              </article>
              <article class="podcast__show">
                <iframe
                  src="https://open.spotify.com/embed/episode/4c2XpIR1vlhAgORrIxRrxm?utm_source=generator&theme=0&t=0"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <div class="podcast__tags-container">
                  <div class="podcast__tags">HABITS</div>
                  <div class="podcast__tags">MOTIVATION</div>
                  <div class="podcast__tags">OPTIMISM</div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
