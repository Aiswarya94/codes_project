// Application-area name

            // ADD Operation
            app.post('/addapp', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getapp', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updateapp/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deleteapp/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
                    

                    // Chemnames

            // ADD Operation
            app.post('/addchem', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getchem', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updatechem/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deletechem/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }


                    // city 

            // ADD Operation
            app.post('/addcity', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getcity', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updatecity/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deletecity/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }

           // country

            // ADD Operation
            app.post('/addcountry', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getcountry', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updatecountry/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deletecountry/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }

            // District 

            // ADD Operation
            app.post('/adddistrict', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getdistrict', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updatedistrict/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deletedistrict/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }

            // finyears 

            // ADD Operation
            app.post('/addfin', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getfin', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updatefin/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deletefin/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }


            // matproperties

            // ADD Operation
            app.post('/addmat', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getmat', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updatemat/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deletemat/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }

                                // Product_type 

            // ADD Operation
            app.post('/addproduct', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getproduct', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updateproduct/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deleteproduct/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
                    

                                // Productname 

            // ADD Operation
            app.post('/addproductname', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getproductname', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updateproductname/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deleteproductname/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }

                                // Region

            // ADD Operation
            app.post('/addregion', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getregion', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updateregion/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deleteregion/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }

                                // States

            // ADD Operation
            app.post('/addstate', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getstate', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updatestate/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deletestate/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }

                                // Supply_Type 

            // ADD Operation
            app.post('/addsupply', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getsupply', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updatesupply/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deletesupply/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }

                                // Units

            // ADD Operation
            app.post('/addunit', async (req, resp) => {
                try {
                    const Data = new Reason(req.body);
                    const result = await Data.save();
                    resp.status(200).json(result);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Read Operation
            app.get('/getunit', async (req, resp) => {
                try {
                    const Data = await Reason.find();
                    resp.status(200).json(Data);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Update Operation
            app.put('/updateunit/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const updatedData = await Reason.findByIdAndUpdate(
                        id,
                        req.body,
                        { new: true }
                    );
    
                    if (!updatedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }
    
                    resp.status(200).json(updatedData);
                } catch (e) {
                    console.error(e);
                    resp.status(500).send('Something Went Wrong');
                }
            });
    
            // Delete Operation
            app.delete('/deleteunit/:id', async (req, resp) => {
                try {
                    const { id } = req.params;
                    const deletedData = await Reason.findByIdAndRemove(id);
    
                    if (!deletedData) {
                        return resp.status(404).json({ message: 'Population data not found' });
                    }