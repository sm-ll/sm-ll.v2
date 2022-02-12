import * as React from 'react'

import {
  itemList,
  item,
  itemTop,
  itemTitle,
  itemPrice,
  itemBottom,
  itemDescription,
  itemTags,
  itemFeatures,
  itemSelect,
  itemDate
} from './item.module.scss'

const Item = () => {
  return (
    <div className={itemList}>
	    <div className={item}>
	    	<div className={itemTop}>
		    	<h3 className={itemTitle}>UAN0009</h3>
		    	<h3 className={itemPrice}>£20.99</h3>
		    	<p className={itemDescription}>12" Black Cut Vinyl</p>
		    	<button className={itemSelect}>Pre-order</button>
	    	</div>
	    	<div className={itemBottom}>
		    	<ul className={itemTags}>
		    		<li>deterministic</li> 
		    		<li>repetitive</li> 
		    		<li>tramlines</li> 
		    		<li>dub</li>
		    		<li>techno</li>
	    		</ul>
		    	<ol className={itemFeatures}>
		    		<li>Extrapolation A <span>12:27</span></li>
		    		<li>Extrapolation B <span>15:51</span></li>
		    	</ol>
		    	<p className={itemDate}>11.02.2022</p>
	    	</div>
	    </div>
	    <div className={item}>
	    	<div className={itemTop}>
		    	<h3 className={itemTitle}>UAN0008</h3>
		    	<h3 className={itemPrice}>£3.99</h3>
		    	<p className={itemDescription}>Digital</p>
		    	<button className={itemSelect}>Add to cart</button>
	    	</div>
	    	<div className={itemBottom}>
		    	<ul className={itemTags}>
		    		<li>esse</li> 
		    		<li>ailihphilia</li> 
		    		<li>deed</li> 
		    		<li>lemel</li>
		    		<li>lol</li>
		    		<li>non</li>
		    		<li>stats</li>
		    		<li>ufo</li>
		    		<li>tofu</li>
	    		</ul>	    	
		    	<ol className={itemFeatures}>
		    		<li>level <span>06:58</span></li>
		    		<li>rotator <span>05:29</span></li>
		    		<li>level <span>06:58</span></li>
		    		<li>rotator <span>05:29</span></li>
		    	</ol>
		    	<p className={itemDate}>29.01.2022</p>
	    	</div>
	    </div>	    
	    <div className={item}>
	    	<div className={itemTop}>
		    	<h3 className={itemTitle}>UAN0007</h3>
		    	<h3 className={itemPrice}>£2.99</h3>
		    	<button className={itemSelect}>Add to cart</button>
	    	</div>
	    	<div className={itemBottom}>
		    	<ul className={itemTags}>
		    		<li>agile</li> 
		    		<li>ailihphilia</li> 
		    		<li>dub</li>
		    		<li>techno</li>
		    		<li>groove</li>
		    		<li>horizontal</li> 
		    		<li>objectivelygoodrecords</li> 
		    		<li>vs</li>
	    		</ul>
		    	<ol className={itemFeatures}>
		    		<li>A <span>07:33</span></li>
		    		<li>B <span>06:58</span></li>			    		
		    	</ol>
		    	<p className={itemDate}>05.11.2021</p>
	    	</div>
	    </div>
	    <div className={item}>
	    	<div className={itemTop}>
		    	<h3 className={itemTitle}>UAN0006</h3>
		    	<h3 className={itemPrice}>£3.49</h3>
		    	<button className={itemSelect}>Add to cart</button>
	    	</div>
	    	<div className={itemBottom}>
		    	<ul className={itemTags}>
		    		<li>blipcollisions</li> 
		    		<li>dubrattles</li> 
		    		<li>jamedits</li>
		    		<li>remixesarecoming</li>
		    		<li>repetitivity</li>
		    		<li>technogrinds</li> 
	    		</ul>	    	
		    	<ol className={itemFeatures}>
		    		<li>Rattle <span>14:03</span></li>
		    		<li>Blip <span>14:10</span></li>	    		
		    	</ol>
		    	<p className={itemDate}>10.09.2021</p>
	    	</div>
	    </div>
	    <div className={item}>
	    	<div className={itemTop}>
		    	<h3 className={itemTitle}>UAN0008</h3>
		    	<h3 className={itemPrice}>£3.99</h3>
		    	<button className={itemSelect}>Add to cart</button>
	    	</div>
	    	<div className={itemBottom}>
		    	<p className={itemDescription}>Connect Pocket to MIDI and run Nanoloop in sync with external MIDI gear, synths & hardware</p>
		    	<p className={itemDescription}>This cable is compatible with Nanoloop on all original GB, GBC, GBA (incompatible with 1st GB)</p>
		    	<ul className={itemFeatures}>
		    		<li>Item A</li>
		    		<li>Item B</li>
		    		<li>Item C</li>
		    		<li>Item A</li>
		    		<li>Item B</li>
		    		<li>Item C</li>		    		
		    	</ul>
	    	</div>
	    </div>
	    <div className={item}>
	    	<div className={itemTop}>
		    	<h3 className={itemTitle}>UAN0008</h3>
		    	<h3 className={itemPrice}>£3.99</h3>
		    	<button className={itemSelect}>Add to cart</button>
	    	</div>
	    	<div className={itemBottom}>
		    	<p className={itemDescription}>Connect Pocket to MIDI and run Nanoloop in sync with external MIDI gear, synths & hardware</p>
		    	<p className={itemDescription}>This cable is compatible with Nanoloop on all original GB, GBC, GBA (incompatible with 1st GB)</p>
		    	<ul className={itemFeatures}>
		    		<li>Item A</li>
		    		<li>Item B</li>
		    		<li>Item C</li>
		    	</ul>
	    	</div>
	    </div>
	    <div className={item}>
	    	<div className={itemTop}>
		    	<h3 className={itemTitle}>UAN0008</h3>
		    	<h3 className={itemPrice}>£3.99</h3>
		    	<button className={itemSelect}>Add to cart</button>
	    	</div>
	    	<div className={itemBottom}>
		    	<p className={itemDescription}>Connect Pocket to MIDI and run Nanoloop in sync with external MIDI gear, synths & hardware</p>
		    	<p className={itemDescription}>This cable is compatible with Nanoloop on all original GB, GBC, GBA (incompatible with 1st GB)</p>
		    	<ul className={itemFeatures}>
		    		<li>Item A</li>
		    		<li>Item B</li>
		    		<li>Item C</li>
		    	</ul>
	    	</div>
	    </div>
	    <div className={item}>
	    	<div className={itemTop}>
		    	<h3 className={itemTitle}>UAN0008</h3>
		    	<h3 className={itemPrice}>£3.99</h3>
		    	<button className={itemSelect}>Add to cart</button>
	    	</div>
	    	<div className={itemBottom}>
		    	<p className={itemDescription}>Connect Pocket to MIDI and run Nanoloop in sync with external MIDI gear, synths & hardware</p>
		    	<p className={itemDescription}>This cable is compatible with Nanoloop on all original GB, GBC, GBA (incompatible with 1st GB)</p>
		    	<ul className={itemFeatures}>
		    		<li>Item A</li>    		
		    	</ul>
	    	</div>
	    </div>	    	    	    	    	    
    </div>
  )
}

export default Item