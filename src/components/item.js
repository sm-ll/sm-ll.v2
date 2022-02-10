import * as React from 'react'

import {
  itemList,
  item,
  itemTitle,
  itemPrice,
  itemDescription,
  itemFeatures,
  itemSelect
} from './item.module.scss'

const Item = () => {
  return (
    <div className={itemList}>
	    <div className={item}>
	    	<h3 className={itemTitle}>UAN0008</h3>
	    	<h3 className={itemPrice}>£3.99</h3>
	    	<button className={itemSelect}>Add to cart</button>
	    	<p className={itemDescription}>Connect Pocket to MIDI and run Nanoloop in sync with external MIDI gear, synths & hardware</p>
	    	<p className={itemDescription}>This cable is compatible with Nanoloop on all original GB, GBC, GBA (incompatible with 1st GB)</p>
	    	<ul className={itemFeatures}>
	    		<li>Item A</li>
	    		<li>Item B</li>
	    		<li>Item C</li>
	    	</ul>
	    </div>
	    <div className={item}>
	    	<h3 className={itemTitle}>UAN0008</h3>
	    	<h3 className={itemPrice}>£3.99</h3>
	    	<button className={itemSelect}>Add to cart</button>
	    	<p className={itemDescription}>Connect Pocket to MIDI and run Nanoloop in sync with external MIDI gear, synths & hardware</p>
	    	<p className={itemDescription}>This cable is compatible with Nanoloop on all original GB, GBC, GBA (incompatible with 1st GB)</p>
	    	<ul className={itemFeatures}>
	    		<li>Item A</li>
	    		<li>Item B</li>
	    		<li>Item C</li>
	    		<li>Item A</li>
	    		<li>Item B</li>
	    		<li>Item C</li>
	    		<li>Item A</li>
	    		<li>Item B</li>
	    		<li>Item C</li>	    			    		
	    	</ul>
	    </div>
	    <div className={item}>
	    	<h3 className={itemTitle}>UAN0008</h3>
	    	<h3 className={itemPrice}>£3.99</h3>
	    	<button className={itemSelect}>Add to cart</button>
	    	<p className={itemDescription}>Connect Pocket to MIDI and run Nanoloop in sync with external MIDI gear, synths & hardware</p>
	    	<p className={itemDescription}>This cable is compatible with Nanoloop on all original GB, GBC, GBA (incompatible with 1st GB)</p>
	    	<ul className={itemFeatures}>
	    		<li>Item A</li>
	    		<li>Item B</li>
	    		<li>Item C</li>
	    	</ul>
	    </div>
	    <div className={item}>
	    	<h3 className={itemTitle}>UAN0008</h3>
	    	<h3 className={itemPrice}>£3.99</h3>
	    	<button className={itemSelect}>Add to cart</button>
	    	<p className={itemDescription}>Connect Pocket to MIDI and run Nanoloop in sync with external MIDI gear, synths & hardware</p>
	    	<p className={itemDescription}>This cable is compatible with Nanoloop on all original GB, GBC, GBA (incompatible with 1st GB)</p>
	    	<ul className={itemFeatures}>
	    		<li>Item A</li>
	    		<li>Item B</li>
	    		<li>Item C</li>
	    	</ul>
	    </div>
	    <div className={item}>
	    	item
	    </div>
	    <div className={item}>
	    	item
	    </div>
	    <div className={item}>
	    	item
	    </div>
	    <div className={item}>
	    	item
	    </div>   	    	    	    	    
    </div>
  )
}

export default Item