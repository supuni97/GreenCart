<Routes>
  {/* Public user routes */}
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<AllProducts />} />
  <Route path="/products/:category" element={<ProductCategory />} />
  <Route path="/products/:category/:id" element={<ProductDetails />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/add-address" element={<AddAddress />} />
  <Route path="/my-orders" element={<MyOrders />} />

  {/* Seller login */}
  <Route path="/seller-login" element={<SellerLogin />} />

  {/* Seller dashboard layout and nested routes */}
  <Route path="/seller" element={<SellerLayout />}>
    <Route index element={<AddProduct />} />
    <Route path="product-list" element={<ProductList />} />
    <Route path="orders" element={<Orders />} />
  </Route>
</Routes>;
