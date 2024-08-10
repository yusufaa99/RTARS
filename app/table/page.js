
export default function table() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-8 mt-5">
                        <div className="tableheader text-center">
                            <h1 className="text-center">
                                Product Schema
                            </h1>
                        </div>
                        <table class="table table-bordered border-primary table-striped table-light table-hover table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">title</th>
                                    <th scope="col">price</th>
                                    <th scope="col">category</th>
                                    <th scope="col">cart properties</th>
                                    <th scope="col">description</th>
                                    <th scope="col">NO in stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Stock Pot</td>
                                    <td>26000</td>
                                    <td>Cookware</td>
                                    <td>3</td>
                                    <td>Viking hard-anodized non stick COokware</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Blender</td>
                                    <td>2500</td>
                                    <td>Cookware</td>
                                    <td>1</td>
                                    <td>Blendtec classic 575 w/four side jar / black</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>Dish Set</td>
                                    <td>25000</td>
                                    <td>Kitchen</td>
                                    <td>3</td>
                                    <td>Triper International 3-tier Wooden Display Stand</td>
                                    <td>77</td>
                                </tr>
                                <tr>
                                    <td>Knife Set</td>
                                    <td>52000</td>
                                    <td>Kitchen</td>
                                    <td>1</td>
                                    <td>Steel Knife For Kitchen Work</td>
                                    <td>17</td>
                                </tr>
                                <tr>
                                    <td>Plate</td>
                                    <td>17000</td>
                                    <td>Kitchen</td>
                                    <td>7</td>
                                    <td>Barnyard Baby Plate, Rounded Caprine Capa Goat</td>
                                    <td>127</td>
                                </tr>
                                <tr>
                                    <td>Knife Stand</td>
                                    <td>4000</td>
                                    <td>Kitchen</td>
                                    <td>1</td>
                                    <td>Mason Cash Corlor Mix-534 Mixing Bow/Gray</td>
                                    <td>13</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-2">

                    </div>
                </div>
            </div>
        </>
    );
}

