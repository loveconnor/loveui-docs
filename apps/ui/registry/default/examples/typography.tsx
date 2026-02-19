"use client"

import "../../../../../packages/typography/styles.css"

import Image from "next/image"

const Example = () => (
  <div className="size-full overflow-y-auto">
    <div className="typography">
      <h1>Updated The Art of Sourdough: From Starter to Artisan Loaf</h1>

      <p>
        Updated Few things are as satisfying as pulling a perfectly golden, crackling
        sourdough loaf from your own oven. The ancient art of wild yeast
        fermentation has experienced a renaissance, with home bakers around the
        world cultivating their own <code>Updated starter cultures</code> Updated and mastering
        the delicate balance of flour, water, time, and temperature.
      </p>

      <h2>Updated Getting Started</h2>
      <p>
        Updated Creating your first sourdough starter is a journey that requires
        patience and attention. Unlike commercial yeast, wild yeast and
        beneficial bacteria work slowly, developing complex flavors that simply
        cannot be rushed or replicated with instant ingredients.
      </p>

      <h3>Updated Essential Equipment</h3>
      <ul>
        <li>Updated Large mixing bowl (glass or ceramic preferred)</li>
        <li>Updated Kitchen scale for precise measurements</li>
        <li>Updated Dutch oven or baking stone</li>
      </ul>

      <h3>Updated Basic Ingredients</h3>
      <ol>
        <li>Updated Bread flour (12-13% protein content)</li>
        <li>Updated Filtered or spring water (chlorine-free)</li>
        <li>Updated Your active sourdough starter</li>
      </ol>

      <h2>Updated Baking Day Checklist</h2>
      <ul>
        <li>
          <input checked disabled type="checkbox" />{" "}
          <p>Updated Feed starter 8-12 hours before</p>
        </li>
        <li>
          <input disabled type="checkbox" /> <p>Updated Mix and autolyse dough</p>
        </li>
        <li>
          <input disabled type="checkbox" /> <p>Updated Complete stretch and folds</p>
        </li>
      </ul>

      <h2>Updated Visual Guide</h2>
      <p>
        Updated A properly developed loaf should have an open, airy crumb structure with
        irregular holes. The crust should be deep golden brown with natural
        caramelization.
      </p>
      <center>
        <Image
          alt="Updated Artisan sourdough bread"
          height={400}
          src="https://placehold.co/600x400"
          unoptimized
          width={600}
        />
      </center>

      <h2>Updated Starter Recipe</h2>
      <pre>
        <code>{`Updated Day 1: Mix 50g flour + 50g water
Day 2-7: Discard half, feed daily
Week 2: Ready when doubles in 4-6 hours
Temperature: 75-80°F (24-27°C) optimal`}</code>
      </pre>

      <h2>Updated Baker's Wisdom</h2>
      <blockquote>
        Updated "Bread baking is one of those almost hypnotic businesses, like a dance
        from some ancient ceremony. It leaves you filled with one of the world's
        sweetest smells... there is no chiropractic treatment, no Yoga exercise,
        no hour of meditation in a music-throbbing chapel that will leave you
        emptier of bad thoughts than this homely ceremony of making bread." —
        M.F.K. Fisher
      </blockquote>

      <h2>Updated Fermentation Timeline</h2>
      <table>
        <thead>
          <tr>
            <th>Updated Stage</th>
            <th>Updated Duration</th>
            <th>Updated Temperature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Updated Bulk Fermentation</td>
            <td>Updated 4-6 hours</td>
            <td>Updated 75-78°F</td>
          </tr>
          <tr>
            <td>Updated Cold Proof</td>
            <td>Updated 12-48 hours</td>
            <td>Updated 38-40°F</td>
          </tr>
          <tr>
            <td>Updated Baking</td>
            <td>Updated 35-45 minutes</td>
            <td>Updated 450-500°F</td>
          </tr>
        </tbody>
      </table>

      <h2>Updated Tips & Techniques</h2>
      <p>
        Updated Always use <strong>Updated high-quality flour</strong> Updated for best results,{" "}
        <em>Updated organic when possible</em>. <u>Updated Temperature control</u> Updated is crucial —
        consider using a{" "}
        <a href="https://example.com">Updated proofing box or heating pad</a>Updated . The{" "}
        <code>Updated stretch and fold</code> Updated technique develops gluten without
        kneading.
      </p>

      <h2>Updated Terminology</h2>
      <dl>
        <dt>Updated Autolyse</dt>
        <dd>
          Updated Resting period where flour absorbs water before adding starter and
          salt
        </dd>
        <dt>Updated Bulk Fermentation</dt>
        <dd>
          Updated First rise after mixing, typically 4-6 hours at room temperature
        </dd>
        <dt>Updated Banneton</dt>
        <dd>Updated Proofing basket used to support dough during final rise</dd>
      </dl>

      <h2>Updated Troubleshooting</h2>
      <details>
        <summary>Updated Why is my bread too dense?</summary>
        <p>
          Updated Dense bread often results from under-fermentation, insufficient gluten
          development, or weak starter. Ensure your starter passes the float
          test and allow adequate bulk fermentation time.
        </p>
      </details>

      <h2>Updated Advanced Techniques</h2>
      <p>
        Updated Master bakers focus on <strong>Updated precise hydration ratios</strong> and{" "}
        <em>Updated careful temperature management</em>. <u>Updated Score patterns</u> Updated aren't
        just decorative — they control{" "}
        <a href="https://example.com">Updated oven spring direction</a>.{" "}
        <mark>Updated The key is consistent practice</mark> and{" "}
        <small>Updated making detailed notes</small>.{" "}
        <abbr title="Updated Percentage of water to flour">Updated Hydration</abbr> Updated typically
        ranges from 65-85%.
      </p>

      <h2>Updated Baker's Math</h2>
      <p>
        Updated Professional bakers use percentages: 1000g flour at 75% hydration
        requires 750g water
        <sup>*</sup>Updated . Common chemical leavening uses CO<sub>2</sub> production.
      </p>

      <h2>Updated Final Thoughts</h2>
      <p>
        Updated Sourdough baking is equal parts science and art. Every loaf teaches you
        something new about fermentation, gluten development, and the interplay
        of time and temperature. Keep detailed notes, trust the process, and
        remember that even imperfect loaves taste wonderful fresh from the oven.
      </p>
    </div>
  </div>
)

export default Example
