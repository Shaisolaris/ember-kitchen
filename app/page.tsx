"use client"

import { useState } from "react"
import { toast } from "sonner"

export default function Home() {
  const [orders, setOrders] = useState<{name:string,price:number,qty:number}[]>([])
  const [showBooking, setShowBooking] = useState(false)
  const [bookingDone, setBookingDone] = useState(false)

  const addToOrder = (name: string, price: number) => {
    setOrders(prev => {
      const existing = prev.find(o => o.name === name)
      if (existing) return prev.map(o => o.name === name ? {...o, qty: o.qty + 1} : o)
      return [...prev, {name, price, qty: 1}]
    })
    toast.success(`${name} added to order`)
  }

  const removeFromOrder = (name: string) => {
    setOrders(prev => prev.filter(o => o.name !== name))
  }

  const totalItems = orders.reduce((a, o) => a + o.qty, 0)
  const totalPrice = orders.reduce((a, o) => a + o.price * o.qty, 0)

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">Ember*Kitchen</div>
        <nav>
          <a href="#" onClick={(e) => e.preventDefault()}>Menu</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Vibe Check</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Events</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Locations</a>
        </nav>
        <button className="btn-cta" onClick={() => setShowBooking(true)}>Book a Table</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              NO CAP,
              <br />
              JUST <span>FLAVOR</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Serving 70s aesthetics with a modern twist. Locally sourced, highkey delicious, and strictly for the
              vibers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }} onClick={() => document.getElementById("menu")?.scrollIntoView({behavior:"smooth"})}>
                Order Now
              </button>
              <button className="btn-cta" style={{ background: "white" }} onClick={() => document.getElementById("menu")?.scrollIntoView({behavior:"smooth"})}>
                View Menu
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              FRESH AF
              <br />
              EVERY DAY
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #AESTHETIC
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              LOWKEY FIRE
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; ★ BURGERS THAT SLAP ★ CRAFT COCKTAILS ★ RETRO EmberS ONLY ★ OPEN UNTIL 2AM ★ BEST IN THE CITY ★
            BURGERS THAT SLAP ★ CRAFT COCKTAILS ★ RETRO EmberS ONLY ★ OPEN UNTIL 2AM ★ BEST IN THE CITY
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">CHEF'S FAVORITES</h2>
            <a
              href="#" onClick={(e) => e.preventDefault()}
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              See Full Menu →
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Best Seller</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="The OG Burger"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>The OG Burger</h3>
                  <span className="price">$14</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Triple-smashed wagyu beef, secret vibe sauce, pickles on brioche.
                </p>
                <button onClick={() => addToOrder("The OG Burger", 14)} className="btn-cta" style={{marginTop:"12px",padding:"8px 20px",fontSize:"13px",width:"100%"}}>Add to Order</button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Spicy
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Neon Pizza"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Electric Pepperoni</h3>
                  <span className="price">$18</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Double pepperoni, hot honey drizzle, fermented dough.</p>
                <button onClick={() => addToOrder("Electric Pepperoni", 18)} className="btn-cta" style={{marginTop:"12px",padding:"8px 20px",fontSize:"13px",width:"100%"}}>Add to Order</button>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Popular
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Disco Sour"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Disco Sour</h3>
                  <span className="price">$12</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Gin, butterfly pea, elderflower, and gold glitter edible dust.
                </p>
                <button onClick={() => addToOrder("Disco Sour", 12)} className="btn-cta" style={{marginTop:"12px",padding:"8px 20px",fontSize:"13px",width:"100%"}}>Add to Order</button>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">THE Ember CHECK IS PASSED.</h2>
            <p className="vibe-text">
              We don't just do food. We do moments. From the curated 90s hip-hop playlist to the 70s diner seats, every
              corner is designed for your next dump. No reservations needed for the main room, just bring the energy.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }} onClick={() => document.getElementById("story")?.scrollIntoView({behavior:"smooth"})}>
              Our Story
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @Ember.Kitchen
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Insta 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Insta 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Insta 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Insta 4"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Floating Order Bar */}
      {totalItems > 0 && (
        <div style={{position:"fixed",bottom:0,left:0,right:0,background:"var(--primary)",color:"#fff",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:100,boxShadow:"0 -4px 20px rgba(0,0,0,0.3)"}}>
          <div>
            <strong>{totalItems} item{totalItems > 1 ? "s" : ""}</strong>
            <span style={{marginLeft:"8px",opacity:0.8}}>{orders.map(o => `${o.name} x${o.qty}`).join(", ")}</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
            <span style={{fontSize:"18px",fontWeight:700}}>${totalPrice}</span>
            <button onClick={() => { toast.success("Order placed! 🔥"); setOrders([]); }} style={{background:"#fff",color:"var(--primary)",padding:"10px 24px",borderRadius:"8px",fontWeight:600,fontSize:"14px",border:"none",cursor:"pointer"}}>Place Order</button>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBooking && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={() => setShowBooking(false)}>
          <div style={{background:"#fff",borderRadius:"16px",padding:"32px",maxWidth:"420px",width:"90%",color:"#222"}} onClick={e => e.stopPropagation()}>
            {bookingDone ? (
              <div style={{textAlign:"center",padding:"20px 0"}}>
                <div style={{fontSize:"48px",marginBottom:"16px"}}>🎉</div>
                <h3 style={{fontSize:"20px",fontWeight:700,marginBottom:"8px"}}>Table Reserved!</h3>
                <p style={{color:"#666",fontSize:"14px"}}>We&apos;ll send you a confirmation text. See you soon.</p>
                <button onClick={() => { setShowBooking(false); setBookingDone(false); }} className="btn-cta" style={{marginTop:"20px",padding:"12px 32px"}}>Done</button>
              </div>
            ) : (
              <>
                <h3 style={{fontSize:"20px",fontWeight:700,marginBottom:"20px"}}>Book a Table</h3>
                <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
                  <input placeholder="Your Name" style={{padding:"12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px"}} />
                  <input type="tel" placeholder="Phone Number" style={{padding:"12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px"}} />
                  <div style={{display:"flex",gap:"8px"}}>
                    <input type="date" style={{flex:1,padding:"12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px"}} />
                    <select style={{flex:1,padding:"12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",background:"#fff"}}>
                      <option>6:00 PM</option><option>6:30 PM</option><option>7:00 PM</option><option>7:30 PM</option><option>8:00 PM</option><option>8:30 PM</option><option>9:00 PM</option>
                    </select>
                  </div>
                  <select style={{padding:"12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",background:"#fff"}}>
                    <option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6 guests</option><option>8+ guests</option>
                  </select>
                  <button onClick={() => setBookingDone(true)} className="btn-cta" style={{padding:"14px",fontSize:"15px",marginTop:"4px"}}>Reserve Table</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <footer>
        <div>
          <div className="footer-logo">Ember*Kitchen</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Your local spot for high-fidelity food and low-fidelity vibes. Since 2024 but feels like 1974.
          </p>
        </div>
        <div className="footer-links">
          <h4>Nav</h4>
          <ul>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "inherit", textDecoration: "none" }}>
                Menu
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "inherit", textDecoration: "none" }}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "inherit", textDecoration: "none" }}>
                Privacy
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "inherit", textDecoration: "none" }}>
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Hours</h4>
          <ul>
            <li>Tue-Thu: 12pm - 11pm</li>
            <li>Fri-Sat: 12pm - 2am</li>
            <li>Sun: 11am - 9pm</li>
            <li>Mon: Closed (Mental Health Day)</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Ember Kitchen GROUP</span>
          <span>DESIGNED BY 1UI.DEV & BUILT USING v0</span>
          <span>IG / TW / TK</span>
        </div>
      </footer>
    </>
  )
}
