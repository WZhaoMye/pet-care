"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const pageMarkup = `<div class="page-shell">
    <header class="nav" aria-label="主导航">
      <a class="brand" href="#top" aria-label="澄澄宠物洗护首页">
        <span class="brand-mark" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24"><path d="M11.5 8.5c-2.1-3.7-7.5-1.8-6.8 2.8.5 3.4 3.7 5.6 6.8 7.7 3.1-2.1 6.3-4.3 6.8-7.7.7-4.6-4.7-6.5-6.8-2.8Z"></path><path d="M18.5 5.4c1.4.2 2.5 1.4 2.5 2.9"></path></svg>
        </span>
        <span>澄澄宠物洗护</span>
      </a>
      <nav class="nav-links" aria-label="页面栏目">
        <a href="#services">服务</a>
        <a href="#care">流程</a>
        <a href="#pricing">价格</a>
        <a href="#reviews">评价</a>
        <a href="#booking">预约</a>
      </nav>
      <a class="nav-action" href="#booking">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path></svg>
        立即预约
      </a>
    </header>

    <main id="top">
      <section class="hero" aria-label="澄澄宠物洗护首屏">
        <div class="hero-carousel" aria-hidden="true">
          <div class="hero-slide is-active" style="--slide-image: url('/assets/pet-spa-reception.png');"></div>
          <div class="hero-slide" style="--slide-image: url('/assets/pet-spa-washroom.png');"></div>
          <div class="hero-slide" style="--slide-image: url('/assets/pet-spa-grooming.png');"></div>
        </div>
        <div class="hero-inner">
          <div class="hero-content">
            <p class="eyebrow">猫狗洗澡 · 美容修剪 · 皮毛养护</p>
            <h1>澄澄宠物洗护</h1>
            <p class="hero-lead">给每一只小客人安排温柔、干净、可追踪的洗护体验。从皮肤检查到吹干梳理，全程按宠物性格慢慢来。</p>
            <div class="hero-actions">
              <a class="primary-button" href="#booking">
                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                预约本周档期
              </a>
              <a class="ghost-button" href="#pricing">
                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"></path><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"></path><path d="M18 12h.01"></path></svg>
                查看服务价格
              </a>
            </div>
            <div class="hero-stats" aria-label="门店亮点">
              <div class="hero-stat">
                <strong>1 对 1</strong>
                <span>独立洗护工位</span>
              </div>
              <div class="hero-stat">
                <strong>35°C</strong>
                <span>恒温冲洗区</span>
              </div>
              <div class="hero-stat">
                <strong>24h</strong>
                <span>护理记录回访</span>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-dots" role="tablist" aria-label="店内环境轮播图切换">
          <button class="hero-dot is-active" type="button" aria-label="查看前厅接待区" aria-current="true" data-hero-dot="0"></button>
          <button class="hero-dot" type="button" aria-label="查看独立洗护区" aria-current="false" data-hero-dot="1"></button>
          <button class="hero-dot" type="button" aria-label="查看美容烘干区" aria-current="false" data-hero-dot="2"></button>
        </div>
      </section>

      <section id="services">
        <div class="section-inner">
          <div class="section-header">
            <div>
              <p class="section-kicker">SERVICES</p>
              <h2>从日常洗澡到造型护理，一次把毛孩子打理清爽。</h2>
            </div>
            <p class="section-copy">每项服务都会先做皮毛状态观察，再选择洗护产品和吹干方式。害怕水、怕吹风、年纪大的宠物，也会单独安排更慢的节奏。</p>
          </div>
          <div class="service-grid">
            <article class="service-card">
              <div class="icon-badge" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M4 17c2.3 1.8 4.7 2.7 7 2.7s4.7-.9 7-2.7"></path><path d="M6 14c1.7 1.2 3.3 1.8 5 1.8s3.3-.6 5-1.8"></path><path d="M8 11c1 .7 2 .9 3 .9s2-.2 3-.9"></path><circle cx="8" cy="6" r="2"></circle><circle cx="16" cy="6" r="2"></circle></svg></div>
              <h3>基础洗护</h3>
              <p>清洁、护毛、吹干、梳理、耳道外部清洁、指甲修剪，适合日常维护。</p>
            </article>
            <article class="service-card">
              <div class="icon-badge" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M14.5 4.5 19 9"></path><path d="m5 19 8.8-8.8"></path><path d="m9 15 2 2"></path><path d="M14 5 5 14l5 5 9-9a3.5 3.5 0 0 0-5-5Z"></path></svg></div>
              <h3>造型修剪</h3>
              <p>按犬猫体型和毛量设计轮廓，重点处理脚底毛、腹底毛、眼周和臀部。</p>
            </article>
            <article class="service-card">
              <div class="icon-badge" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M12 22s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z"></path><path d="M12 11V7"></path><path d="M9.5 9.5h5"></path></svg></div>
              <h3>皮毛护理</h3>
              <p>针对打结、掉毛、干燥、敏感皮肤做护理建议，使用低刺激洗护产品。</p>
            </article>
            <article class="service-card">
              <div class="icon-badge" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M4 17h16"></path><path d="M6 17V8a4 4 0 0 1 8 0v9"></path><path d="M14 11h4a2 2 0 0 1 2 2v4"></path><path d="M8 21h8"></path></svg></div>
              <h3>接送托管</h3>
              <p>预约制接送，洗护前后短时看护，适合工作日无法到店的家庭。</p>
            </article>
          </div>
        </div>
      </section>

      <section id="care" class="split-section">
        <div class="section-inner split-layout">
          <div class="feature-media environment-carousel" role="region" aria-label="高端宠物洗护店内环境轮播" data-carousel>
            <div class="environment-slide is-active">
              <img src="/assets/pet-spa-reception.png" alt="中国高端宠物洗护店前厅接待与等候区">
            </div>
            <div class="environment-slide">
              <img src="/assets/pet-spa-washroom.png" alt="中国高端宠物洗护店独立洗护区">
            </div>
            <div class="environment-slide">
              <img src="/assets/pet-spa-grooming.png" alt="中国高端宠物洗护店美容修剪与烘干护理区">
            </div>
            <button class="carousel-button carousel-prev" type="button" aria-label="上一张店内环境图" data-carousel-prev>
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
            </button>
            <button class="carousel-button carousel-next" type="button" aria-label="下一张店内环境图" data-carousel-next>
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
            <div class="carousel-dots" role="tablist" aria-label="店内环境图切换">
              <button class="carousel-dot" type="button" aria-label="查看前厅接待区" aria-current="true" data-carousel-dot="0"></button>
              <button class="carousel-dot" type="button" aria-label="查看独立洗护区" aria-current="false" data-carousel-dot="1"></button>
              <button class="carousel-dot" type="button" aria-label="查看美容烘干区" aria-current="false" data-carousel-dot="2"></button>
            </div>
            <div class="feature-note">
              <strong>安心可见</strong>
              <span>洗护完成后发送照片、护理记录和下次护理建议。</span>
            </div>
          </div>
          <div>
            <p class="section-kicker">CARE FLOW</p>
            <h2>每一步都按宠物状态调整，不把“快”放在“舒服”前面。</h2>
            <ul class="feature-list">
              <li>
                <span class="step-number">01</span>
                <div><strong>到店评估</strong><span>确认性格、皮肤、毛结、耳眼状态，并记录主人重点需求。</span></div>
              </li>
              <li>
                <span class="step-number">02</span>
                <div><strong>分区洗护</strong><span>水温、洗护液、冲洗力度和吹风方式按体型与敏感程度调整。</span></div>
              </li>
              <li>
                <span class="step-number">03</span>
                <div><strong>美容整理</strong><span>梳通毛发、修剪局部、检查脚垫和指甲，让宠物走路更轻松。</span></div>
              </li>
              <li>
                <span class="step-number">04</span>
                <div><strong>交付回访</strong><span>发送护理记录，提醒掉毛期、换季皮肤和下次预约时间。</span></div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" class="pricing-band">
        <div class="section-inner">
          <div class="section-header">
            <div>
              <p class="section-kicker">PRICING</p>
              <h2>清晰价格，按体型和毛量微调。</h2>
            </div>
            <p class="section-copy">选择宠物类型后查看参考价。最终价格会根据体重、毛结程度、造型复杂度和是否需要特殊护理确认。</p>
          </div>
          <div class="pricing-tools" role="group" aria-label="选择宠物类型">
            <button class="segment-button" type="button" data-pet="dog" aria-pressed="true">狗狗</button>
            <button class="segment-button" type="button" data-pet="cat" aria-pressed="false">猫咪</button>
          </div>
          <div class="price-grid">
            <article class="price-card">
              <div>
                <h3>轻享洗护</h3>
                <p>日常清洁和基础护理。</p>
              </div>
              <div class="price-row">
                <span class="price" data-price="basic">¥88</span>
                <span class="tag">约 60 分钟</span>
              </div>
              <ul>
                <li>温和沐浴和护毛</li>
                <li>吹干梳理</li>
                <li>耳道外部清洁</li>
                <li>指甲修剪</li>
              </ul>
            </article>
            <article class="price-card featured">
              <div>
                <h3>精致美容</h3>
                <p>洗护加局部或全身造型。</p>
              </div>
              <div class="price-row">
                <span class="price" data-price="style">¥168</span>
                <span class="tag">人气选择</span>
              </div>
              <ul>
                <li>包含轻享洗护</li>
                <li>脚底、腹底、臀部修剪</li>
                <li>脸部轮廓整理</li>
                <li>护理照片记录</li>
              </ul>
            </article>
            <article class="price-card">
              <div>
                <h3>舒缓 SPA</h3>
                <p>适合换季、掉毛和皮毛干燥。</p>
              </div>
              <div class="price-row">
                <span class="price" data-price="spa">¥228</span>
                <span class="tag">约 120 分钟</span>
              </div>
              <ul>
                <li>低刺激养护洗浴</li>
                <li>深层梳毛</li>
                <li>皮毛保湿护理</li>
                <li>24 小时回访建议</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="reviews">
        <div class="section-inner">
          <div class="section-header">
            <div>
              <p class="section-kicker">REVIEWS</p>
              <h2>主人放心，宠物也愿意再来。</h2>
            </div>
            <p class="section-copy">我们更在意细节：洗完有没有吹透、皮肤有没有异常、回家后有没有紧张。每次护理都是一次长期关系的开始。</p>
          </div>
          <div class="reviews-carousel" data-reviews-carousel role="region" aria-label="主人评价轮播">
            <div class="reviews-viewport">
              <div class="reviews-track">
                <article class="review-card">
              <div class="stars" aria-label="五星评价">★★★★★</div>
              <p>家里小狗很怕吹风，店员会分段休息，还发了护理照片。洗完毛蓬蓬的，回家也没有焦躁。</p>
              <div class="reviewer">
                <span class="avatar">L</span>
                <div><strong>李女士</strong><span>比熊 · 精致美容</span></div>
              </div>
            </article>
            <article class="review-card">
              <div class="stars" aria-label="五星评价">★★★★★</div>
              <p>猫咪第一次外洗，比想象中顺利。会提前确认猫的脾气，过程很安静，指甲也剪得很细致。</p>
              <div class="reviewer">
                <span class="avatar">C</span>
                <div><strong>陈先生</strong><span>英短 · 基础洗护</span></div>
              </div>
            </article>
            <article class="review-card">
              <div class="stars" aria-label="五星评价">★★★★★</div>
              <p>换毛季做了 SPA，打结地方处理得很耐心，还提醒了皮肤泛红的位置。服务很专业。</p>
              <div class="reviewer">
                <span class="avatar">W</span>
                <div><strong>王女士</strong><span>金毛 · 舒缓 SPA</span></div>
              </div>
            </article>
            <article class="review-card">
              <div class="stars" aria-label="五星评价">★★★★★</div>
              <p>预约时间卡得很准，到店后先看皮肤和耳朵，洗完还把注意事项写清楚了，很适合第一次来的新手主人。</p>
              <div class="reviewer">
                <span class="avatar">Z</span>
                <div><strong>周女士</strong><span>柯基 · 基础洗护</span></div>
              </div>
            </article>
            <article class="review-card">
              <div class="stars" aria-label="五星评价">★★★★★</div>
              <p>我家猫很胆小，店员没有硬来，全程慢慢安抚。回家后状态也稳定，指甲和脚毛都整理得很干净。</p>
              <div class="reviewer">
                <span class="avatar">M</span>
                <div><strong>马先生</strong><span>布偶 · 猫咪洗护</span></div>
              </div>
            </article>
            <article class="review-card">
              <div class="stars" aria-label="五星评价">★★★★★</div>
              <p>老年犬洗护最怕折腾，这次中间安排了休息，吹干也很彻底。护理师会主动说明哪些地方要回家继续观察。</p>
              <div class="reviewer">
                <span class="avatar">H</span>
                <div><strong>何女士</strong><span>拉布拉多 · 舒缓 SPA</span></div>
              </div>
            </article>
            <article class="review-card">
              <div class="stars" aria-label="五星评价">★★★★★</div>
              <p>造型修得很自然，不会剪得太夸张。接送也提前沟通时间，照片和护理记录发得很及时。</p>
              <div class="reviewer">
                <span class="avatar">Y</span>
                <div><strong>杨先生</strong><span>泰迪 · 精致美容</span></div>
              </div>
            </article>
            <article class="review-card">
              <div class="stars" aria-label="五星评价">★★★★★</div>
              <p>换季掉毛严重，做完深层梳毛轻松很多。店里会提醒后续梳毛频率和洗护间隔，感觉很负责。</p>
              <div class="reviewer">
                <span class="avatar">S</span>
                <div><strong>孙女士</strong><span>柴犬 · 皮毛护理</span></div>
              </div>
            </article>
              </div>
            </div>
            <div class="reviews-controls" aria-label="评价轮播控制">
              <button class="carousel-button reviews-prev" type="button" aria-label="上一组评价" data-reviews-prev>
                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
              </button>
              <div class="reviews-dots" role="tablist" aria-label="评价组切换">
                <button class="reviews-dot" type="button" aria-label="查看第 1 组评价" aria-current="true" data-reviews-dot="0"></button>
                <button class="reviews-dot" type="button" aria-label="查看第 2 组评价" aria-current="false" data-reviews-dot="1"></button>
                <button class="reviews-dot" type="button" aria-label="查看第 3 组评价" aria-current="false" data-reviews-dot="2"></button>
                <button class="reviews-dot" type="button" aria-label="查看第 4 组评价" aria-current="false" data-reviews-dot="3"></button>
                <button class="reviews-dot" type="button" aria-label="查看第 5 组评价" aria-current="false" data-reviews-dot="4"></button>
                <button class="reviews-dot" type="button" aria-label="查看第 6 组评价" aria-current="false" data-reviews-dot="5"></button>
                <button class="reviews-dot" type="button" aria-label="查看第 7 组评价" aria-current="false" data-reviews-dot="6"></button>
                <button class="reviews-dot" type="button" aria-label="查看第 8 组评价" aria-current="false" data-reviews-dot="7"></button>
              </div>
              <button class="carousel-button reviews-next" type="button" aria-label="下一组评价" data-reviews-next>
                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" class="booking-section">
        <div class="section-inner booking-layout">
          <div class="contact-panel">
            <p class="section-kicker">BOOKING</p>
            <h2>提前预约，给宠物留一个不赶时间的护理档期。</h2>
            <p class="section-copy">留下宠物状态和期望时间，门店会根据当天档期确认到店时间。特殊皮肤、胆小怕吹风或需要接送，都可以提前备注。</p>
            <div class="contact-grid">
              <div class="contact-item">
                <span class="contact-icon" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"></path></svg></span>
                <div><strong>预约电话</strong><span><a href="tel:18593467886">18593467886</a></span></div>
              </div>
              <div class="contact-item">
                <span class="contact-icon" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z"></path><circle cx="12" cy="10" r="2"></circle></svg></span>
                <div><strong>门店地址</strong><span>上海市宜川路街道陕西北路 1620 号</span></div>
              </div>
              <div class="contact-item">
                <span class="contact-icon" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg></span>
                <div><strong>营业时间</strong><span>周一至周日 10:00 - 20:00</span></div>
              </div>
            </div>
            <div class="store-map map-art">
              <img src="/assets/pet-shop-location-map.png" alt="可爱宠物店风格的澄澄宠物洗护位置地图，标记陕西北路 1620 号附近门店">
              <div class="map-label-card">
                <strong>澄澄宠物洗护</strong>
                <span>陕西北路 1620 号 · 预约电话 18593467886</span>
              </div>
            </div>
          </div>

          <form class="booking-form" id="bookingForm">
            <div class="form-row">
              <label>主人姓名
                <input name="owner" type="text" placeholder="例如：小林" required>
              </label>
              <label>联系电话
                <input name="phone" type="tel" placeholder="例如：138 0000 0000" required>
              </label>
            </div>
            <div class="form-row">
              <label>宠物类型
                <select name="petType" required>
                  <option value="">请选择</option>
                  <option>狗狗</option>
                  <option>猫咪</option>
                </select>
              </label>
              <label>预约服务
                <select name="service" required>
                  <option value="">请选择</option>
                  <option>轻享洗护</option>
                  <option>精致美容</option>
                  <option>舒缓 SPA</option>
                  <option>接送托管</option>
                </select>
              </label>
            </div>
            <div class="form-row">
              <label>期望日期
                <input name="date" type="date" required>
              </label>
              <label>期望时间
                <select name="time" required>
                  <option value="">请选择</option>
                  <option>10:00 - 12:00</option>
                  <option>13:00 - 15:00</option>
                  <option>15:30 - 17:30</option>
                  <option>18:00 - 20:00</option>
                </select>
              </label>
            </div>
            <label>备注
              <textarea name="note" placeholder="例如：怕吹风、皮肤敏感、需要修圆脸"></textarea>
            </label>
            <button class="primary-button" type="submit">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
              提交预约意向
            </button>
            <div class="form-note" id="formNote" role="status" aria-live="polite"></div>
          </form>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <a class="footer-logo" href="#top" aria-label="返回澄澄宠物洗护首页">
            <span class="brand-mark" aria-hidden="true">
              <svg class="icon" viewBox="0 0 24 24"><path d="M11.5 8.5c-2.1-3.7-7.5-1.8-6.8 2.8.5 3.4 3.7 5.6 6.8 7.7 3.1-2.1 6.3-4.3 6.8-7.7.7-4.6-4.7-6.5-6.8-2.8Z"></path><path d="M18.5 5.4c1.4.2 2.5 1.4 2.5 2.9"></path></svg>
            </span>
            澄澄宠物洗护
          </a>
          <p>温柔洗护，认真交付。每一次到店都先观察状态，再安排适合宠物的清洁、护理和休息节奏。</p>
        </div>
        <div class="footer-links" aria-label="页脚信息">
          <div>
            <strong>服务承诺</strong>
            <span>一宠一巾 · 工具消毒 · 护理记录</span>
            <span>胆小、敏感、老年宠物可备注慢速护理</span>
          </div>
          <div>
            <strong>门店信息</strong>
            <span>上海市宜川路街道陕西北路 1620 号</span>
            <span>周一至周日 10:00 - 20:00</span>
          </div>
          <div>
            <strong>快捷入口</strong>
            <a href="tel:18593467886">电话预约 18593467886</a>
            <a href="#booking">填写预约意向</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 澄澄宠物洗护 · 猫狗洗澡 · 美容修剪 · 皮毛养护</span>
          <a href="#top">返回顶部</a>
        </div>
      </div>
    </footer>
  </div>`;

const prices = {
  dog: { basic: "¥88", style: "¥168", spa: "¥228" },
  cat: { basic: "¥128", style: "¥218", spa: "¥268" },
};

const wrapIndex = (index, length) => {
  if (!length) return 0;
  return (index + length) % length;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Home() {
  const rootRef = useRef(null);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeEnvironmentSlide, setActiveEnvironmentSlide] = useState(0);
  const [environmentPaused, setEnvironmentPaused] = useState(false);
  const [activeReviewSlide, setActiveReviewSlide] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const [reviewMaxIndex, setReviewMaxIndex] = useState(0);
  const [reviewLayoutTick, setReviewLayoutTick] = useState(0);
  const [selectedPet, setSelectedPet] = useState("dog");
  const [formNote, setFormNote] = useState("");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const slides = Array.from(root.querySelectorAll(".hero-slide"));
    const dots = Array.from(root.querySelectorAll(".hero-dot"));
    const current = wrapIndex(activeHeroSlide, slides.length);

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === current);
    });

    dots.forEach((dot, index) => {
      const isActive = index === current;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", String(isActive));
    });
  }, [activeHeroSlide]);

  useEffect(() => {
    const root = rootRef.current;
    const slideCount = root?.querySelectorAll(".hero-slide").length ?? 0;
    if (slideCount <= 1 || prefersReducedMotion()) return;

    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => wrapIndex(current + 1, slideCount));
    }, 4600);

    return () => window.clearInterval(timer);
  }, [activeHeroSlide]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const carousel = root.querySelector("[data-carousel]");
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll(".environment-slide"));
    const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
    const current = wrapIndex(activeEnvironmentSlide, slides.length);

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === current);
    });

    dots.forEach((dot, index) => {
      dot.setAttribute("aria-current", String(index === current));
    });
  }, [activeEnvironmentSlide]);

  useEffect(() => {
    const root = rootRef.current;
    const slideCount = root?.querySelectorAll(".environment-slide").length ?? 0;
    if (slideCount <= 1 || environmentPaused || prefersReducedMotion()) return;

    const timer = window.setInterval(() => {
      setActiveEnvironmentSlide((current) => wrapIndex(current + 1, slideCount));
    }, 4200);

    return () => window.clearInterval(timer);
  }, [activeEnvironmentSlide, environmentPaused]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const updateReviewWindow = () => {
      const cards = root.querySelectorAll(".review-card");
      const visibleCards = window.matchMedia("(max-width: 640px)").matches
        ? 1
        : window.matchMedia("(max-width: 940px)").matches
          ? 2
          : 3;
      const maxIndex = Math.max(0, cards.length - visibleCards);

      setReviewMaxIndex(maxIndex);
      setActiveReviewSlide((current) => Math.min(current, maxIndex));
      setReviewLayoutTick((current) => current + 1);
    };

    updateReviewWindow();
    window.addEventListener("resize", updateReviewWindow);

    return () => window.removeEventListener("resize", updateReviewWindow);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const carousel = root.querySelector("[data-reviews-carousel]");
    const track = carousel?.querySelector(".reviews-track");
    const cards = Array.from(carousel?.querySelectorAll(".review-card") ?? []);
    const dots = Array.from(carousel?.querySelectorAll(".reviews-dot") ?? []);
    if (!track || !cards.length) return;

    const current = Math.min(activeReviewSlide, reviewMaxIndex);
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;

    track.style.transform = `translateX(-${current * step}px)`;
    dots.forEach((dot) => {
      const index = Number(dot.dataset.reviewsDot);
      dot.hidden = index > reviewMaxIndex;
      dot.setAttribute("aria-current", String(index === current));
    });
  }, [activeReviewSlide, reviewMaxIndex, reviewLayoutTick]);

  useEffect(() => {
    if (reviewMaxIndex <= 0 || reviewsPaused || prefersReducedMotion()) return;

    const timer = window.setInterval(() => {
      setActiveReviewSlide((current) => (current >= reviewMaxIndex ? 0 : current + 1));
    }, 5200);

    return () => window.clearInterval(timer);
  }, [reviewMaxIndex, reviewsPaused]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.querySelectorAll(".segment-button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.pet === selectedPet));
    });

    Object.entries(prices[selectedPet]).forEach(([key, value]) => {
      const node = root.querySelector(`[data-price="${key}"]`);
      if (node) node.textContent = value;
    });
  }, [selectedPet]);

  useEffect(() => {
    const note = rootRef.current?.querySelector("#formNote");
    if (note) note.textContent = formNote;
  }, [formNote]);

  const handleClick = useCallback((event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const heroDot = target.closest("[data-hero-dot]");
    if (heroDot) {
      setActiveHeroSlide(Number(heroDot.dataset.heroDot));
      return;
    }

    const carousel = rootRef.current?.querySelector("[data-carousel]");
    const slideCount = carousel?.querySelectorAll(".environment-slide").length ?? 0;

    if (target.closest("[data-carousel-prev]")) {
      setActiveEnvironmentSlide((current) => wrapIndex(current - 1, slideCount));
      return;
    }

    if (target.closest("[data-carousel-next]")) {
      setActiveEnvironmentSlide((current) => wrapIndex(current + 1, slideCount));
      return;
    }

    const carouselDot = target.closest("[data-carousel-dot]");
    if (carouselDot) {
      setActiveEnvironmentSlide(Number(carouselDot.dataset.carouselDot));
      return;
    }

    if (target.closest("[data-reviews-prev]")) {
      setActiveReviewSlide((current) => (current <= 0 ? reviewMaxIndex : current - 1));
      return;
    }

    if (target.closest("[data-reviews-next]")) {
      setActiveReviewSlide((current) => (current >= reviewMaxIndex ? 0 : current + 1));
      return;
    }

    const reviewDot = target.closest("[data-reviews-dot]");
    if (reviewDot) {
      setActiveReviewSlide(Number(reviewDot.dataset.reviewsDot));
      return;
    }

    const segmentButton = target.closest("[data-pet]");
    if (segmentButton) {
      setSelectedPet(segmentButton.dataset.pet);
    }
  }, [reviewMaxIndex]);

  const handleSubmit = useCallback((event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.id !== "bookingForm") return;

    event.preventDefault();
    const data = new FormData(form);
    const owner = data.get("owner") || "\u60a8";
    const service = data.get("service") || "\u6240\u9009\u670d\u52a1";
    const date = data.get("date") || "\u9884\u7ea6\u65e5\u671f";
    const time = data.get("time") || "\u9884\u7ea6\u65f6\u95f4";

    setFormNote(
      `${owner}\uff0c\u5df2\u6536\u5230 ${date} ${time} \u7684 ${service} \u610f\u5411\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u8054\u7cfb\u786e\u8ba4\u3002`,
    );
    form.reset();
  }, []);

  const handleMouseOver = useCallback((event) => {
    const target = event.target;
    if (target instanceof Element && target.closest("[data-carousel]")) {
      setEnvironmentPaused(true);
    }
    if (target instanceof Element && target.closest("[data-reviews-carousel]")) {
      setReviewsPaused(true);
    }
  }, []);

  const handleMouseOut = useCallback((event) => {
    const carousel = rootRef.current?.querySelector("[data-carousel]");
    const reviewsCarousel = rootRef.current?.querySelector("[data-reviews-carousel]");

    const relatedTarget = event.relatedTarget;
    if (
      carousel &&
      (!(relatedTarget instanceof Node) || !carousel.contains(relatedTarget))
    ) {
      setEnvironmentPaused(false);
    }

    if (
      reviewsCarousel &&
      (!(relatedTarget instanceof Node) || !reviewsCarousel.contains(relatedTarget))
    ) {
      setReviewsPaused(false);
    }
  }, []);

  return (
    <div
      ref={rootRef}
      onClick={handleClick}
      onSubmit={handleSubmit}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      dangerouslySetInnerHTML={{ __html: pageMarkup }}
    />
  );
}
