<?php
/**
 * Marketing create, update, delete and view
 *
 * PHP version 8.0
 *
 * @category Administration
 * @package  Modules\Marketing
 * @author   Vipul Patel <vipul@chetsapp.com>
 * @license  Chetsapp Private Limited
 * @link     http://chetsapp.com
 */
namespace Modules\Marketing\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Helper\Helpers\AdminHelper;
use Modules\Marketing\Http\Requests\CreateMarketingRequest;
use Modules\Marketing\Http\Requests\UpdateMarketingRequest;
use Modules\Marketing\Repositories\MarketingRepository;

/**
 * Class MarketingController
 *
 * Marketing create, update, delete and view.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Marketing
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class MarketingController extends Controller
{
    protected $maketingRepo;

    /**
     * Instantiate a new repository instance.
     *
     * @param MarketingRepository $marketing [Object]
     *
     * @return void
     */
    public function __construct(MarketingRepository $marketing)
    {
        $this->maketingRepo = $marketing;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        // --
        // Check role/permission
        // if (!AdminHelper::can_action(12, 'view')) {
        //     return response()->json("Access denied", 403);
        // }

        return $this->maketingRepo->findAll();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateMarketingRequest $request [Request for create marketing]
     *
     * @return Response
     */
    // public function store(CreateMarketingRequest $request)
    public function store($request)
    {
        // --
        // Check role/permission
        // if (!AdminHelper::can_action(12, 'created')) {
        //     return response()->json("Access denied", 403);
        // }

        if ($this->maketingRepo->create($request)) {
            return response()->json('success', 200);
        } else {
            return response()->json(['error' => 'Error while creating.'], 400);
        }
    }

    /**
     * Show the specified resource.
     *
     * @param int $id [Row id]
     *
     * @return Response
     */
    public function show($id)
    {
        // --
        // Check role/permission
        // if (!AdminHelper::can_action(12, 'view')) {
        //     return response()->json("Access denied", 403);
        // }

        return $this->maketingRepo->findById($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update marketing]
     * @param int     $id      [Row id]
     *
     * @return Response
     */
    // public function update(UpdateMarketingRequest $request, $id)
    public function update($request, $id)
    {
        // --
        // Check role/permission
        // if (!AdminHelper::can_action(12, 'edited')) {
        //     return response()->json("Access denied", 403);
        // }

        if ($this->maketingRepo->update($request, $id)) {
            return response()->json('success', 200);
        } else {
            return response()->json(['error' => 'Error while updating.'], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for destroy marketing]
     * @param int     $id      [Row id]
     *
     * @return Response
     */
    public function destroy(Request $request, $id)
    {
        // --
        // Check role/permission
        // if (!AdminHelper::can_action(12, 'deleted')) {
        //     return response()->json("Access denied", 403);
        // }

        if ($this->maketingRepo->delete($request, $id)) {
            return response()->json('success', 200);
        } else {
            return response()->json(['error' => 'Error while deleting.'], 400);
        }
    }

    /**
     * Display a listing of the resource for list.
     *
     * @param Request $request [Params for list marketings]
     *
     * @return Response
     */
    public function getMarketings(Request $request)
    {
        return $this->maketingRepo->getMarketings($request);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update marketing list]
     *
     * @return Response
     */
    public function updateList(Request $request)
    {
        // --
        // Check role/permission
        // if (!AdminHelper::can_action(12, 'edited')) {
        //     return response()->json("Access denied", 403);
        // }

        $marketing = $this->maketingRepo->updateList($request);

        if ($marketing) {
            return response()->json('success');
        } else {
            return response()->json('error');
        }
    }
}
