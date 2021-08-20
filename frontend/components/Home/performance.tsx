import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import isometric_image from "../images/isometric_Image.png";
import info from "../images/info.png";

const Performance: NextPage = () => {
  return (
    <>
      <div>
        <div>
          <svg
            className="ml-32 mt-20 w-14 h-14"
            enableBackground="new 0 0 64 64"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M57.3431396,26.1503296c-0.0012817-0.0018311-0.0020142-0.0039673-0.0032959-0.0057983  c-0.0009766-0.0014038-0.0021362-0.0026855-0.0031128-0.0040894c-0.0012817-0.0018311-0.0024414-0.0038452-0.0037231-0.0056763  c-0.0014648-0.0020752-0.00354-0.0036621-0.0050659-0.0057373c-1.0036011-1.4341431-2.1480103-2.7977295-3.4031372-4.0523682  c-0.5512695-0.5517578-1.1293945-1.0878906-1.7182617-1.59375c-0.8388672-0.7207031-2.1010742-0.6245117-2.8203125,0.2138672  c-0.7197266,0.8378906-0.6240234,2.1005859,0.2138672,2.8203125c0.512207,0.4399414,1.0151367,0.90625,1.4956055,1.3876953  c0.6786499,0.6781616,1.3192139,1.3919678,1.9163208,2.133606l-4.3634033,3.9912109C44.7294922,25.96521,38.7606201,23,32.25,23  h-0.5c-2.2949219,0-4.550293,0.3720703-6.7045898,1.1064453C24,24.4628906,23.4414063,25.5991211,23.7978516,26.6450195  c0.3564453,1.0454102,1.4912109,1.6020508,2.5385742,1.2475586C28.0737305,27.300293,29.8950195,27,31.75,27h0.5  c5.9089966,0,11.2714233,3.020874,14.3414917,8.0731201c0.0011597,0.0018921,0.0024414,0.0036011,0.00354,0.0054321  c0.0002441,0.0003662,0.0004272,0.0006714,0.0006714,0.0010376C48.168457,37.6987305,49,40.6967773,49,43.75V47h-9.8621826  l0.8577881-12.8671875c0.0581055-0.871582-0.456543-1.6806641-1.2709961-1.9970703  c-0.8149414-0.315918-1.7402344-0.0668945-2.2861328,0.6147461L25.0388794,47H15v-3.25  c0-0.4620361,0.0183716-0.9209595,0.0548706-1.3760986c0.2556152-3.1859131,1.3998413-6.1849976,3.348938-8.7454834  c0.8256836-1.0888672,1.784668-2.0761719,2.8500977-2.9345703c0.8603516-0.6928711,0.9960938-1.9516602,0.3032227-2.8120117  c-0.6923828-0.8603516-1.9506836-0.996582-2.8120117-0.3032227c-0.7017822,0.5651855-1.3629761,1.1784668-1.9846802,1.8284912  l-3.9940186-4.3546753C17.826355,19.9144897,24.7403564,17,32,17c4.2578125,0,8.3300781,0.9599609,12.1030273,2.8530273  c0.9868164,0.4956055,2.1884766,0.097168,2.6845703-0.890625c0.4956055-0.9873047,0.0966797-2.1894531-0.890625-2.6845703  C41.5620117,14.1030273,36.8862305,13,32,13c-9.0151978,0-17.5656738,3.9140015-23.460083,10.7385254  c-0.0005493,0.0006104-0.0012817,0.0010986-0.0018311,0.001709C3.6772461,29.3530273,1,36.5478516,1,44v5  c0,1.1044922,0.8955078,2,2,2h10h38h10c1.1044922,0,2-0.8955078,2-2v-5C63,37.5579834,61.0436401,31.3863525,57.3431396,26.1503296z   M35.5805664,40.2260742L35.1289063,47h-4.9676514L35.5805664,40.2260742z M5,44  c0-5.7324219,1.8178711-11.2885742,5.1572266-15.8740234l4.0947266,4.4638672  c-0.0014038,0.0021973-0.0025635,0.0045166-0.0039673,0.0067139c-0.0127563,0.0198975-0.0233154,0.0407715-0.0359497,0.0606689  c-0.2728271,0.428772-0.5275269,0.8662109-0.7664795,1.3108521c-0.0808716,0.1503906-0.1514893,0.3050537-0.2283936,0.4571533  c-0.161438,0.3191528-0.319519,0.6395264-0.463623,0.9659424c-0.0808105,0.1829834-0.1533813,0.3688965-0.2286987,0.5540161  c-0.1234131,0.3034058-0.2423706,0.6082153-0.3509521,0.9170532c-0.0696411,0.1980591-0.1343384,0.3974609-0.197876,0.5975952  c-0.0969238,0.305603-0.1865234,0.6132202-0.269043,0.9234619c-0.0540161,0.203125-0.1069336,0.40625-0.1547852,0.6112671  c-0.074585,0.3195801-0.1381836,0.6419067-0.1975098,0.9656372c-0.036438,0.1984253-0.0756226,0.395813-0.1062622,0.5957642  c-0.0541992,0.3540649-0.0934448,0.7114258-0.1295166,1.0697632c-0.017395,0.1726074-0.041626,0.3434448-0.0547485,0.5169067  C11.0238647,42.6748047,11,43.2103271,11,43.75V47H5V44z M59,47h-6v-3.25c0-0.4414673-0.0170288-0.8815918-0.0449219-1.3205566  c-0.0090332-0.1412354-0.0249023-0.2814941-0.0368042-0.4224243c-0.0250854-0.2978516-0.0532837-0.5950928-0.0910645-0.8911133  c-0.0209961-0.1646729-0.0467529-0.3282471-0.0717163-0.4922485c-0.041748-0.2744141-0.0877075-0.5477295-0.1403198-0.8200073  c-0.0319214-0.1653442-0.0656128-0.3301392-0.1015625-0.4946899c-0.0601807-0.2756958-0.1272583-0.5494385-0.1985474-0.8223877  c-0.0400391-0.1530762-0.0784912-0.3063965-0.1220093-0.4585571c-0.0870972-0.3049316-0.184082-0.6067505-0.2850342-0.9074707  c-0.0386353-0.1149902-0.072937-0.2311401-0.1135864-0.345459c-0.1486206-0.4181519-0.3087158-0.8323975-0.4839478-1.2409058  c-0.006897-0.0160522-0.0151367-0.0316772-0.0220947-0.0477295c-0.1483765-0.3434448-0.3040161-0.6838989-0.4710083-1.0195923  l0.8408813-0.769104l3.6478882-3.3364258C57.7290039,34.4814453,59,39.1523438,59,44V47z" />
          </svg>
        </div>

        <div className="ml-32 text-red-600 text-2xl font-bold">Performance</div>
        <div className="ml-32 mt-4 text-5xl md:text-6xl font-bold pr-40">
          <h1>Helping students to increase productivity.</h1>
        </div>
        <div className="ml-32 mt-4 text-base md:text-xl xl:text-2xl pr-40 xl:pr-96">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            temporibus sint consequatur deleniti provident, necessitatibus
            voluptas expedita eos eaque officiis fugit at consequuntur
            recusandae rerum? Iusto est nam aperiam deleniti? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sit fuga magni deserunt amet
            itaque saepe ut, sunt laudantium doloribus nam aperiam rerum unde
            odio? Ut ipsum numquam molestias provident! Sequi? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eveniet eum reprehenderit
            veritatis ea. Nemo, maiores culpa necessitatibus sunt eaque repellat
            aspernatur exercitationem ex illum quia consequatur nesciunt modi
            sapiente pariatur.
          </p>
        </div>
        <div className="flex ml-32 mt-4 mb-24 text-xl gap-4 justify-left">
          <div className="text-red-600">
            <h2>
              <Link href="#">Our Team</Link>
            </h2>
          </div>
          <div className="cursor:pointer">
            <Link href="#">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
