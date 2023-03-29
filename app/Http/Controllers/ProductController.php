<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

use App\Models\Stream;
use App\Models\Textareadata;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function textareadata()
    {
        $allData = Textareadata::latest()->paginate(10);
		return response()->json([
		'allData' => $allData
		]); 
    }
    public function textareadata_store(Request $request)
    {
        $data = new Textareadata();
        $data->title = $request->title;
        $data->description = $request->description;
        $save = $data->save();

        if($save)
        {
            $message="Textarea data created successfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]);  
        }
        else
        {
            $message="Unable to create textarea data,please try again.";
            $status = 0;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]); 
        }
    }
    public function textareadata_update(Request $request)
    {
        $data = Textareadata::find($request->id);
        $data->title = $request->title;
        $data->description = $request->description;
        $save = $data->update();

        if($save)
        {
            $message="Textarea data created successfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]);  
        }
        else
        {
            $message="Unable to create textarea data,please try again.";
            $status = 0;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]); 
        }
    }

    public function textareadata_view($id)
    {
        $allData = Textareadata::find($id);
		return response()->json([
		  'allData' => $allData
		]); 
    }

    public function textareadata_destroy($id)
    {
        $data = Textareadata::find($id);
        $delete = $data->delete();
        if($delete)
        {   
            $allData = Textareadata::latest()->paginate(10);
            $message="Textarea data deleted sccuessfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status,
                'allData' => $allData
            ]); 
        }
        else
        {
            $message="Unable to delete textarea data,please try again.";
            $status = 0;
            return response()->json([
                'message' => $message,
                'status' => $status
            ]); 
        }
        
    }

    public function stream()
    {
        $allData = Stream::latest()->paginate(10);
		return response()->json([
		'allData' => $allData
		]); 
    }

    public function index()
    {
        $allData = Product::latest()->paginate(3);
		return response()->json([
		'allData' => $allData
		]); 
    }

    public function search(Request $request)
	{
        $query = $request->get('search');
		if($request->get('search') == null)
		{
            $allData=Product::latest()->get();
		}
		else
		{
            if($request->get('search') == "all")
		    {
               $allData=Product::latest()->get();
		    }
		    else
		    {
                $allData=Product::where('product_name', 'LIKE', "%{$query}%")->latest()->get();		
		    }
		}
		return response()->json([
            'allData' => $allData,
        ]); 	
	}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
