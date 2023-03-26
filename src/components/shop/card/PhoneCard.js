import React, { useState, useEffect } from "react";
import "../../../App.css";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PhoneCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [dispatch, id]);
  const [quantity, setQuantity] = useState(1);
  const DecQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const [show2, setShow2] = useState(false);

  const toggleShow2 = () => setShow2(!show2);

  const [show3, setShow3] = useState(false);

  const toggleShow3 = () => setShow3(!show3);

  const [show4, setShow4] = useState(false);

  const toggleShow4 = () => setShow4(!show4);

  return (
    <div className="Product_container">
      <div className="Product_main">
        <div className="Product_image">
          <div className="Product_main_image">
            <img src={product.itemImg} alt="placeholder" />
          </div>
          <div className="Product_thumbmail">
            <button>
              <img
                src={require("../../../IMAGES/goleft.png")}
                alt="placeholder"
              />
            </button>
            <img src={product.itemImg} alt="placeholder" />
            <img src={product.itemImg} alt="placeholder" />
            <img src={product.itemImg} alt="placeholder" />
            <button>
              <img
                src={require("../../../IMAGES/goright.png")}
                alt="placeholder"
              />
            </button>
          </div>
        </div>
        <div className="Product_spec">
          <div className="Product_roll">
            <div className="Product_title">
              <h1> {product.name} </h1>
              <h2>{product.description1}</h2>
            </div>
            <div className="specs">
              <div className="Specs_roll">
                <strong>Refurbished</strong>
                <p>
                  <strong>Model : </strong>
                  <span>MKLV3LL/A</span>
                </p>
              </div>
              <div className="Specs_roll">
                <p>
                  <strong>SKU : </strong>
                  <span>87294820</span>
                </p>
                <p>
                  <strong>Color : </strong>
                  <span>{product.color}</span>
                </p>
              </div>
            </div>
            <div className="Colors">
              <h1>Other available colors</h1>
              <div className="circles">
                <div className="circle" id="circle1"></div>
                <div className="circle" id="circle2"></div>
                <div className="circle" id="circle3"></div>
                <div className="circle" id="circle4"></div>
              </div>
              <div className="Picked_colors">
                <h2>Picked : </h2>
                <span>{product.color}</span>
              </div>
            </div>
            <div className="Product_Quantity">
              <h2>Quantity</h2>
              <div className="Quantity">
                <button
                  aria-label="button"
                  aria-labelledby="button"
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  -
                </button>
                <p type="text" value="1">
                  {quantity}
                </p>
                <button
                  aria-label="button"
                  aria-labelledby="button"
                  type="button"
                  onClick={DecQuantity}
                >
                  +
                </button>
              </div>
            </div>
            <div className="shipping-pickup">
              <div className="Pickup">
                <h1 id="abt">About this item</h1>
                <ul>
                  <li>
                    <div id="hr"></div>Unlocked
                  </li>
                  <li>
                    <div id="hr"></div>Tested for battery health and guaranteed
                    to come with a battery that exceeds 90% of original
                    capacity.
                  </li>
                  <li>
                    <div id="hr"></div>Inspected and guaranteed to have minimal
                    cosmetic damage, which is not noticeable when the device is
                    held at arm’s length. Successfully passed a full diagnostic
                    test which ensures like-new functionality and removal of any
                    prior-user personal information.
                  </li>
                  <li>
                    <div id="hr"></div>Includes a brand new, generic charging
                    cable that is certified Mfi (Made for iPhone) and a brand
                    new, generic wall plug that is UL certified for performance
                    and safety. Also includes a SIM tray removal tool but does
                    not come with headphones or a SIM card.
                  </li>
                  <li>
                    <div id="hr"></div>Backed by the same one-year satisfaction
                    guarantee as brand new Apple products.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Product_pay">
            <div className="Total">
              <p>${product.newItemPrice}</p>
            </div>
            <div className="Pay_text">
              <p>Delivery Friday, July 29. Order within 18 hrs 28 mins</p>
            </div>
            <button
              className="Add_cart"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: { product, quantity },
                })
              }
            >
              <img src={require("../../../IMAGES/add.png")} alt="" />{" "}
              <p>Add to Cart </p>
            </button>
            <button className="Buy_now">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="descriptions">
        <div className="drop-box">
          <div
            className="group-head"
            data-id="description"
            id="group-head1"
            onClick={toggleShow}
          >
            <h1>Overview</h1>
            <img src={require("../../../IMAGES/arrow.png")} alt="" />
          </div>
          <div className={show ? "group active" : "group"}>
            <div className="table" id="description">
              <div className="levels">
                <div className="row-title">Description</div>
                <div className="row-content">
                  <p>
                    iPhone 13 Pro Max. The biggest Pro camera system upgrade
                    ever. Super Retina XDR display with ProMotion for a faster,
                    more responsive feel. Lightning-fast A15 Bionic chip.
                    Superfast 5G.¹ Durable design and the best battery life ever
                    in an iPhone.²
                  </p>
                </div>
              </div>
              <div className="levels">
                <div className="row-title">Features</div>
                <div className="row-content">
                  <p>
                    6.7-inch Super Retina XDR display with ProMotion for a
                    faster, more responsive feel³
                  </p>
                  <p>
                    Cinematic mode adds shallow depth of field and shifts focus
                    automatically in your videos
                  </p>
                  <p>
                    Pro camera system with new 12MP Telephoto, Wide, and Ultra
                    Wide cameras; LiDAR Scanner; 6x optical zoom range; macro
                    photography; Photographic Styles, ProRes video,⁴ Smart HDR
                    4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording
                  </p>
                  <p>
                    12MP TrueDepth front camera with Night mode, 4K Dolby Vision
                    HDR recording
                  </p>
                  <p>A15 Bionic chip for lightning-fast performance</p>
                  <p>
                    Up to 28 hours of video playback, the best battery life ever
                    in an iPhone²
                  </p>
                  <p>Durable design with Ceramic Shield</p>
                  <p>Industry-leading IP68 water resistance⁵</p>
                  <p>5G for superfast downloads and high-quality streaming¹</p>
                  <p>
                    iOS 15 packs new features to do more with iPhone than ever
                    before⁶
                  </p>
                  <p>
                    Data plan required. 5G is available in select markets and
                    through select carriers. Speeds vary based on site
                    conditions and carrier. For details on 5G support, contact
                    your carrier and see apple.com/iphone/cellular.
                  </p>
                  <p>
                    Battery life varies by use and configuration. See
                    apple.com/batteries for more information.
                  </p>
                  <p>
                    ³The display has rounded corners that follow a beautiful
                    curved design, and these corners are within a standard
                    rectangle. When measured as a standard rectangular shape,
                    the screen is 6.68 inches diagonally. Actual viewable area
                    is less.
                  </p>
                </div>
              </div>
              <div className="levels">
                <div className="row-title">What's included</div>
                <div className="row-content">
                  <h2>Apple iPhone 13 Pro Max 5G 256GB</h2>
                  <h2>USB-C to Lightning cable</h2>
                  <h2>Documentation</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="drop-box">
            <div
              className="group-head"
              data-id="specifications"
              id="group-head2"
              onClick={toggleShow2}
            >
              <h1>Specifications</h1>
              <img src={require("../../../IMAGES/arrow.png")} alt="" />
            </div>
            <div className={show2 ? "group2 active" : "group2"}>
              <div className="table" id="specifications">
                <div className="levels">
                  <div className="row-title">General</div>
                  <div className="row-content">
                    <div className="tables">
                      <div className="tab">
                        <h2>Product Name</h2>
                        <p>iPhone 13 Pro Max 5G 256GB</p>
                      </div>
                      <div className="tab">
                        <h2>Brand</h2>
                        <p>Apple</p>
                      </div>
                      <div className="tab">
                        <h2>No-Contract</h2>
                        <p>No</p>
                      </div>
                      <div className="tab">
                        <h2>Data Plan Required</h2>
                        <p>Yes</p>
                      </div>
                      <div className="tab">
                        <h2>Device Manufacturer</h2>
                        <p>Apple</p>
                      </div>
                      <div className="tab">
                        <h2>Additional Hardware Included</h2>
                        <p> USB-C to Lightning cable</p>
                      </div>
                      <div className="tab">
                        <h2>Phone Style</h2>
                        <p>Smartphone</p>
                      </div>
                      <div className="tab">
                        <h2>Model Number</h2>
                        <p>MLKV3LL/A</p>
                      </div>
                      <div className="tab">
                        <h2>No-Contract</h2>
                        <p>No</p>
                      </div>
                      <div className="tab">
                        <h2>Series</h2>
                        <p>iPhone 13 </p>
                      </div>
                      <div className="tab">
                        <h2>Color</h2>
                        <p>Sierra Blue</p>
                      </div>
                      <div className="tab">
                        <h2>Color Category</h2>
                        <p>Blue</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="levels">
                  <div className="row-title">Key Specifications</div>
                  <div className="row-content">
                    <div className="tables">
                      <div className="tab">
                        <h2>Voice Assistant Built-in</h2>
                        <p>Siri</p>
                      </div>
                      <div className="tab">
                        <h2>Carrier</h2>
                        <p>AT&T</p>
                      </div>
                      <div className="tab">
                        <h2>Wireless Technology </h2>
                        <p>4G LTE, 5G</p>
                      </div>
                      <div className="tab">
                        <h2>Operating System</h2>
                        <p>Apple iOS 15</p>
                      </div>
                      <div className="tab">
                        <h2>Usage Time(s)</h2>
                        <p>
                          Video playback: up to 28 hours; video playback
                          (streamed): up to 25 hours; audio playback: up to 95
                          hours
                        </p>
                      </div>
                      <div className="tab">
                        <h2>Internal Memory</h2>
                        <p>256 gigabytes</p>
                      </div>
                      <div className="tab">
                        <h2>Screen Size</h2>
                        <p>6.7 inches</p>
                      </div>
                      <div className="tab">
                        <h2>Water Resistant</h2>
                        <p>Yes</p>
                      </div>
                      <div className="tab">
                        <h2>Front-Facing Camera</h2>
                        <p>12 megapixels</p>
                      </div>
                      <div className="tab">
                        <h2>Processor Brand</h2>
                        <p>Apple</p>
                      </div>
                      <div className="tab">
                        <h2>Rear-Facing Camera</h2>
                        <p>12 megapixels</p>
                      </div>
                      <div className="tab">
                        <h2>Processor Model</h2>
                        <p>
                          A15 Bionic chip with next-generation Neural Engine
                        </p>
                      </div>
                      <div className="tab">
                        <h2>Internet Connectable</h2>
                        <p>Yes</p>
                      </div>
                      <div className="tab">
                        <h2>Works With</h2>
                        <p>Siri</p>
                      </div>
                      <div className="tab">
                        <h2>Series</h2>
                        <p>iPhone 13</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="drop-box">
            <div
              className="group-head"
              data-id="reviews"
              id="group-head3"
              onClick={toggleShow3}
            >
              <h1>Reviews</h1>
              <img src={require("../../../IMAGES/arrow.png")} alt="" />
            </div>
            <div className={show3 ? "group3 active" : "group3"}>
              <div className="table" id="reviews">
                <div className="levels">
                  <div className="row-title">Reviews</div>
                  <div className="row-content">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Tempore repellat tenetur dicta reiciendis quas sequi
                      ducimus repellendus temporibus, eos, aspernatur, quasi
                      veniam et. Harum similique ipsum deleniti maiores. Soluta,
                      illo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="drop-box">
            <div
              className="group-head"
              data-id="qa"
              id="group-head4"
              onClick={toggleShow4}
            >
              <h1>Q/A</h1>
              <img src={require("../../../IMAGES/arrow.png")} alt="" />
            </div>
            <div className={show4 ? "group4 active" : "group4"}>
              <div className="table" id="qa">
                <div className="levels">
                  <h1>Feature Coming Soon</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
