"use strict";
(self.webpackChunkruffle_selfhosted =
  self.webpackChunkruffle_selfhosted || []).push([
  [159],
  {
    972: (e, n, _) => {
      function t(e, n) {
        const _ = e.length,
          t = e.getChannelData(0),
          r = e.getChannelData(1);
        let b = 0,
          f = 0;
        for (; f < _; ) (t[f] = n[b]), (r[f] = n[b + 1]), f++, (b += 2);
      }
      function r(e, n) {
        return e[n];
      }
      _.d(n, { $s: () => r, tM: () => t });
    },
    159: (e, n, _) => {
      _.r(n), _.d(n, { Ruffle: () => U, default: () => N, initSync: () => j });
      var t = _(972);
      e = _.hmd(e);
      const r =
        "undefined" != typeof AudioContext
          ? AudioContext
          : "undefined" != typeof webkitAudioContext
          ? webkitAudioContext
          : void 0;
      let b;
      const f = new Array(128).fill(void 0);
      function c(e) {
        return f[e];
      }
      f.push(void 0, null, !0, !1);
      let a = f.length;
      function u(e) {
        const n = c(e);
        return (
          (function (e) {
            e < 132 || ((f[e] = a), (a = e));
          })(e),
          n
        );
      }
      function o(e) {
        a === f.length && f.push(f.length + 1);
        const n = a;
        return (a = f[n]), (f[n] = e), n;
      }
      const i = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
      i.decode();
      let g = null;
      function w() {
        return (
          (null !== g && 0 !== g.byteLength) ||
            (g = new Uint8Array(b.memory.buffer)),
          g
        );
      }
      function d(e, n) {
        return i.decode(w().subarray(e, e + n));
      }
      function l(e) {
        return null == e;
      }
      let s = null;
      function m() {
        return (
          (null !== s && 0 !== s.byteLength) ||
            (s = new Float64Array(b.memory.buffer)),
          s
        );
      }
      let p = null;
      function y() {
        return (
          (null !== p && 0 !== p.byteLength) ||
            (p = new Int32Array(b.memory.buffer)),
          p
        );
      }
      let h = 0;
      const x = new TextEncoder("utf-8"),
        S =
          "function" == typeof x.encodeInto
            ? function (e, n) {
                return x.encodeInto(e, n);
              }
            : function (e, n) {
                const _ = x.encode(e);
                return n.set(_), { read: e.length, written: _.length };
              };
      function v(e, n, _) {
        if (void 0 === _) {
          const _ = x.encode(e),
            t = n(_.length);
          return (
            w()
              .subarray(t, t + _.length)
              .set(_),
            (h = _.length),
            t
          );
        }
        let t = e.length,
          r = n(t);
        const b = w();
        let f = 0;
        for (; f < t; f++) {
          const n = e.charCodeAt(f);
          if (n > 127) break;
          b[r + f] = n;
        }
        if (f !== t) {
          0 !== f && (e = e.slice(f)), (r = _(r, t, (t = f + 3 * e.length)));
          const n = w().subarray(r + f, r + t);
          f += S(e, n).written;
        }
        return (h = f), r;
      }
      let A = null;
      function I(e) {
        const n = typeof e;
        if ("number" == n || "boolean" == n || null == e) return `${e}`;
        if ("string" == n) return `"${e}"`;
        if ("symbol" == n) {
          const n = e.description;
          return null == n ? "Symbol" : `Symbol(${n})`;
        }
        if ("function" == n) {
          const n = e.name;
          return "string" == typeof n && n.length > 0
            ? `Function(${n})`
            : "Function";
        }
        if (Array.isArray(e)) {
          const n = e.length;
          let _ = "[";
          n > 0 && (_ += I(e[0]));
          for (let t = 1; t < n; t++) _ += ", " + I(e[t]);
          return (_ += "]"), _;
        }
        const _ = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let t;
        if (!(_.length > 1)) return toString.call(e);
        if (((t = _[1]), "Object" == t))
          try {
            return "Object(" + JSON.stringify(e) + ")";
          } catch (e) {
            return "Object";
          }
        return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : t;
      }
      function D(e, n, _, t) {
        const r = { a: e, b: n, cnt: 1, dtor: _ },
          f = (...e) => {
            r.cnt++;
            const n = r.a;
            r.a = 0;
            try {
              return t(n, r.b, ...e);
            } finally {
              0 == --r.cnt
                ? b.__wbindgen_export_2.get(r.dtor)(n, r.b)
                : (r.a = n);
            }
          };
        return (f.original = r), f;
      }
      function P(e, n, _) {
        b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3245c470e9a5f6f5(
          e,
          n,
          o(_)
        );
      }
      function T(e, n, _) {
        b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he969d8a754c2b093(
          e,
          n,
          _
        );
      }
      function F(e, n) {
        b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h325eeff663ea61bc(
          e,
          n
        );
      }
      function E(e, n, _) {
        b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1981a4792138d54a(
          e,
          n,
          o(_)
        );
      }
      function R(e, n) {
        try {
          return e.apply(this, n);
        } catch (e) {
          b.__wbindgen_exn_store(o(e));
        }
      }
      let k = null;
      function M() {
        return (
          (null !== k && 0 !== k.byteLength) ||
            (k = new Uint32Array(b.memory.buffer)),
          k
        );
      }
      let B = null;
      function C(e, n) {
        return ((null !== B && 0 !== B.byteLength) ||
          (B = new Float32Array(b.memory.buffer)),
        B).subarray(e / 4, e / 4 + n);
      }
      function L(e, n) {
        return w().subarray(e / 1, e / 1 + n);
      }
      function O(e, n) {
        return y().subarray(e / 4, e / 4 + n);
      }
      let W = null;
      class U {
        static __wrap(e) {
          const n = Object.create(U.prototype);
          return (n.ptr = e), n;
        }
        __destroy_into_raw() {
          const e = this.ptr;
          return (this.ptr = 0), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          b.__wbg_ruffle_free(e);
        }
        constructor(e, n, _) {
          return u(b.ruffle_new(o(e), o(n), o(_)));
        }
        stream_from(e, n) {
          try {
            const t = b.__wbindgen_add_to_stack_pointer(-16),
              r = v(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = h;
            b.ruffle_stream_from(t, this.ptr, r, f, o(n));
            var _ = y()[t / 4 + 0];
            if (y()[t / 4 + 1]) throw u(_);
          } finally {
            b.__wbindgen_add_to_stack_pointer(16);
          }
        }
        load_data(e, n, _) {
          try {
            const r = b.__wbindgen_add_to_stack_pointer(-16),
              f = v(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              c = h;
            b.ruffle_load_data(r, this.ptr, o(e), o(n), f, c);
            var t = y()[r / 4 + 0];
            if (y()[r / 4 + 1]) throw u(t);
          } finally {
            b.__wbindgen_add_to_stack_pointer(16);
          }
        }
        play() {
          b.ruffle_play(this.ptr);
        }
        pause() {
          b.ruffle_pause(this.ptr);
        }
        is_playing() {
          return 0 !== b.ruffle_is_playing(this.ptr);
        }
        volume() {
          return b.ruffle_volume(this.ptr);
        }
        set_volume(e) {
          b.ruffle_set_volume(this.ptr, e);
        }
        renderer_debug_info() {
          return u(b.ruffle_renderer_debug_info(this.ptr));
        }
        prepare_context_menu() {
          return u(b.ruffle_prepare_context_menu(this.ptr));
        }
        run_context_menu_callback(e) {
          b.ruffle_run_context_menu_callback(this.ptr, e);
        }
        set_fullscreen(e) {
          b.ruffle_set_fullscreen(this.ptr, e);
        }
        clear_custom_menu_items() {
          b.ruffle_clear_custom_menu_items(this.ptr);
        }
        destroy() {
          b.ruffle_destroy(this.ptr);
        }
        call_exposed_callback(e, n) {
          const _ = v(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = h,
            r = (function (e, n) {
              const _ = n(4 * e.length),
                t = M();
              for (let n = 0; n < e.length; n++) t[_ / 4 + n] = o(e[n]);
              return (h = e.length), _;
            })(n, b.__wbindgen_malloc),
            f = h;
          return u(b.ruffle_call_exposed_callback(this.ptr, _, t, r, f));
        }
        set_trace_observer(e) {
          b.ruffle_set_trace_observer(this.ptr, o(e));
        }
        audio_context() {
          return u(b.ruffle_audio_context(this.ptr));
        }
        static is_wasm_simd_used() {
          return 0 !== b.ruffle_is_wasm_simd_used();
        }
      }
      function V() {
        const n = { wbg: {} };
        return (
          (n.wbg.__wbindgen_object_drop_ref = function (e) {
            u(e);
          }),
          (n.wbg.__wbindgen_cb_drop = function (e) {
            const n = u(e).original;
            return 1 == n.cnt-- && ((n.a = 0), !0);
          }),
          (n.wbg.__wbindgen_object_clone_ref = function (e) {
            return o(c(e));
          }),
          (n.wbg.__wbg_setMetadata_128bd20648a12d07 = function (e, n) {
            c(e).setMetadata(u(n));
          }),
          (n.wbg.__wbindgen_is_function = function (e) {
            return "function" == typeof c(e);
          }),
          (n.wbg.__wbindgen_string_new = function (e, n) {
            return o(d(e, n));
          }),
          (n.wbg.__wbg_getProperty_af1b259e02b39917 = function () {
            return R(function (e, n) {
              return o((0, t.$s)(c(e), c(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_onCallbackAvailable_d54d3847055a0720 = function (
            e,
            n,
            _
          ) {
            c(e).onCallbackAvailable(d(n, _));
          }),
          (n.wbg.__wbg_onFSCommand_68fd9326a1eb7ff5 = function () {
            return R(function (e, n, _, t, r) {
              return c(e).onFSCommand(d(n, _), d(t, r));
            }, arguments);
          }),
          (n.wbg.__wbindgen_number_get = function (e, n) {
            const _ = c(n),
              t = "number" == typeof _ ? _ : void 0;
            (m()[e / 8 + 1] = l(t) ? 0 : t), (y()[e / 4 + 0] = !l(t));
          }),
          (n.wbg.__wbindgen_string_get = function (e, n) {
            const _ = c(n),
              t = "string" == typeof _ ? _ : void 0;
            var r = l(t) ? 0 : v(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = h;
            (y()[e / 4 + 1] = f), (y()[e / 4 + 0] = r);
          }),
          (n.wbg.__wbindgen_boolean_get = function (e) {
            const n = c(e);
            return "boolean" == typeof n ? (n ? 1 : 0) : 2;
          }),
          (n.wbg.__wbindgen_is_null = function (e) {
            return null === c(e);
          }),
          (n.wbg.__wbindgen_number_new = function (e) {
            return o(e);
          }),
          (n.wbg.__wbg_panic_52092d3d09d11787 = function (e, n) {
            c(e).panic(c(n));
          }),
          (n.wbg.__wbg_displayUnsupportedMessage_34ccd53f2155863e = function (
            e
          ) {
            c(e).displayUnsupportedMessage();
          }),
          (n.wbg.__wbg_displayRootMovieDownloadFailedMessage_ed4ad3ae9522c8a3 =
            function (e) {
              c(e).displayRootMovieDownloadFailedMessage();
            }),
          (n.wbg.__wbg_displayMessage_6b8a0011f836541f = function (e, n, _) {
            c(e).displayMessage(d(n, _));
          }),
          (n.wbg.__wbg_setFullscreen_85ac797b8823b727 = function () {
            return R(function (e, n) {
              c(e).setFullscreen(0 !== n);
            }, arguments);
          }),
          (n.wbg.__wbg_openVirtualKeyboard_e0659b8d0c7b81ed = function (e) {
            c(e).openVirtualKeyboard();
          }),
          (n.wbg.__wbindgen_error_new = function (e, n) {
            return o(new Error(d(e, n)));
          }),
          (n.wbg.__wbg_ruffle_new = function (e) {
            return o(U.__wrap(e));
          }),
          (n.wbg.__wbindgen_is_undefined = function (e) {
            return void 0 === c(e);
          }),
          (n.wbg.__wbindgen_in = function (e, n) {
            return c(e) in c(n);
          }),
          (n.wbg.__wbindgen_is_bigint = function (e) {
            return "bigint" == typeof c(e);
          }),
          (n.wbg.__wbindgen_bigint_from_u64 = function (e) {
            return o(BigInt.asUintN(64, e));
          }),
          (n.wbg.__wbindgen_jsval_eq = function (e, n) {
            return c(e) === c(n);
          }),
          (n.wbg.__wbindgen_is_string = function (e) {
            return "string" == typeof c(e);
          }),
          (n.wbg.__wbindgen_is_object = function (e) {
            const n = c(e);
            return "object" == typeof n && null !== n;
          }),
          (n.wbg.__wbg_copyToAudioBufferInterleaved_efb71b16faf5adb2 =
            function (e, n, _) {
              (0, t.tM)(c(e), C(n, _));
            }),
          (n.wbg.__wbg_new_abda76e883ba8a5f = function () {
            return o(new Error());
          }),
          (n.wbg.__wbg_stack_658279fe44541cf6 = function (e, n) {
            const _ = v(c(n).stack, b.__wbindgen_malloc, b.__wbindgen_realloc),
              t = h;
            (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
          }),
          (n.wbg.__wbg_error_f851667af71bcfc6 = function (e, n) {
            try {
              console.error(d(e, n));
            } finally {
              b.__wbindgen_free(e, n);
            }
          }),
          (n.wbg.__wbindgen_jsval_loose_eq = function (e, n) {
            return c(e) == c(n);
          }),
          (n.wbg.__wbg_String_88810dfeb4021902 = function (e, n) {
            const _ = v(
                String(c(n)),
                b.__wbindgen_malloc,
                b.__wbindgen_realloc
              ),
              t = h;
            (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
          }),
          (n.wbg.__wbg_getwithrefkey_5e6d9547403deab8 = function (e, n) {
            return o(c(e)[c(n)]);
          }),
          (n.wbg.__wbg_set_841ac57cff3d672b = function (e, n, _) {
            c(e)[u(n)] = u(_);
          }),
          (n.wbg.__wbg_log_c9486ca5d8e2cbe8 = function (e, n) {
            try {
              console.log(d(e, n));
            } finally {
              b.__wbindgen_free(e, n);
            }
          }),
          (n.wbg.__wbg_log_aba5996d9bde071f = function (
            e,
            n,
            _,
            t,
            r,
            f,
            c,
            a
          ) {
            try {
              console.log(d(e, n), d(_, t), d(r, f), d(c, a));
            } finally {
              b.__wbindgen_free(e, n);
            }
          }),
          (n.wbg.__wbg_mark_40e050a77cc39fea = function (e, n) {
            performance.mark(d(e, n));
          }),
          (n.wbg.__wbg_measure_aa7a73f17813f708 = function () {
            return R(function (e, n, _, t) {
              try {
                performance.measure(d(e, n), d(_, t));
              } finally {
                b.__wbindgen_free(e, n), b.__wbindgen_free(_, t);
              }
            }, arguments);
          }),
          (n.wbg.__wbg_randomFillSync_6894564c2c334c42 = function () {
            return R(function (e, n, _) {
              c(e).randomFillSync(L(n, _));
            }, arguments);
          }),
          (n.wbg.__wbg_getRandomValues_805f1c3d65988a5a = function () {
            return R(function (e, n) {
              c(e).getRandomValues(c(n));
            }, arguments);
          }),
          (n.wbg.__wbg_crypto_e1d53a1d73fb10b8 = function (e) {
            return o(c(e).crypto);
          }),
          (n.wbg.__wbg_process_038c26bf42b093f8 = function (e) {
            return o(c(e).process);
          }),
          (n.wbg.__wbg_versions_ab37218d2f0b24a8 = function (e) {
            return o(c(e).versions);
          }),
          (n.wbg.__wbg_node_080f4b19d15bc1fe = function (e) {
            return o(c(e).node);
          }),
          (n.wbg.__wbg_msCrypto_6e7d3e1f92610cbb = function (e) {
            return o(c(e).msCrypto);
          }),
          (n.wbg.__wbg_require_78a3dcfbdba9cbce = function () {
            return R(function () {
              return o(e.require);
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7 =
            function (e) {
              let n;
              try {
                n = c(e) instanceof WebGL2RenderingContext;
              } catch {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_beginQuery_fb152d8d84f2b130 = function (e, n, _) {
            c(e).beginQuery(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_bindBufferRange_f2c529259df5358e = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).bindBufferRange(n >>> 0, _ >>> 0, c(t), r, b);
          }),
          (n.wbg.__wbg_bindSampler_6eb88b542e5a410f = function (e, n, _) {
            c(e).bindSampler(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_bindVertexArray_8b71290041cb6746 = function (e, n) {
            c(e).bindVertexArray(c(n));
          }),
          (n.wbg.__wbg_blitFramebuffer_86eee8a5763ded5e = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f,
            a,
            u,
            o,
            i
          ) {
            c(e).blitFramebuffer(n, _, t, r, b, f, a, u, o >>> 0, i >>> 0);
          }),
          (n.wbg.__wbg_bufferData_573e61c49a480c4d = function (e, n, _, t) {
            c(e).bufferData(n >>> 0, _, t >>> 0);
          }),
          (n.wbg.__wbg_bufferData_16f948547d74c866 = function (e, n, _, t) {
            c(e).bufferData(n >>> 0, c(_), t >>> 0);
          }),
          (n.wbg.__wbg_bufferSubData_c7180c0b681078e8 = function (e, n, _, t) {
            c(e).bufferSubData(n >>> 0, _, c(t));
          }),
          (n.wbg.__wbg_clearBufferfi_95daf829c568e58a = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).clearBufferfi(n >>> 0, _, t, r);
          }),
          (n.wbg.__wbg_clearBufferfv_b3c90fbed3b74920 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).clearBufferfv(n >>> 0, _, C(t, r));
          }),
          (n.wbg.__wbg_clearBufferiv_fe2a00a8f8fb7322 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).clearBufferiv(n >>> 0, _, O(t, r));
          }),
          (n.wbg.__wbg_clearBufferuiv_a41730a8d84c6ac6 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            var b, f;
            c(e).clearBufferuiv(
              n >>> 0,
              _,
              ((b = t), (f = r), M().subarray(b / 4, b / 4 + f))
            );
          }),
          (n.wbg.__wbg_clientWaitSync_ae8f3712f85a57fb = function (e, n, _, t) {
            return c(e).clientWaitSync(c(n), _ >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_compressedTexSubImage2D_23b602b828848fb7 = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f,
            a,
            u,
            o
          ) {
            c(e).compressedTexSubImage2D(n >>> 0, _, t, r, b, f, a >>> 0, u, o);
          }),
          (n.wbg.__wbg_compressedTexSubImage2D_d6c95fc640a9f4de = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f,
            a,
            u
          ) {
            c(e).compressedTexSubImage2D(n >>> 0, _, t, r, b, f, a >>> 0, c(u));
          }),
          (n.wbg.__wbg_compressedTexSubImage3D_00b794917e65d559 = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f,
            a,
            u,
            o,
            i,
            g
          ) {
            c(e).compressedTexSubImage3D(
              n >>> 0,
              _,
              t,
              r,
              b,
              f,
              a,
              u,
              o >>> 0,
              i,
              g
            );
          }),
          (n.wbg.__wbg_compressedTexSubImage3D_c9c7b42e0f7db586 = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f,
            a,
            u,
            o,
            i
          ) {
            c(e).compressedTexSubImage3D(
              n >>> 0,
              _,
              t,
              r,
              b,
              f,
              a,
              u,
              o >>> 0,
              c(i)
            );
          }),
          (n.wbg.__wbg_copyBufferSubData_c903618a0e0a9fca = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).copyBufferSubData(n >>> 0, _ >>> 0, t, r, b);
          }),
          (n.wbg.__wbg_copyTexSubImage3D_88fc9e1c56d3e7db = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f,
            a,
            u,
            o
          ) {
            c(e).copyTexSubImage3D(n >>> 0, _, t, r, b, f, a, u, o);
          }),
          (n.wbg.__wbg_createQuery_42b609ba267d041d = function (e) {
            const n = c(e).createQuery();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createSampler_d1255ae3836b1bee = function (e) {
            const n = c(e).createSampler();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createVertexArray_de7292bbd7ea02dd = function (e) {
            const n = c(e).createVertexArray();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_deleteQuery_0981fb4d492e46a7 = function (e, n) {
            c(e).deleteQuery(c(n));
          }),
          (n.wbg.__wbg_deleteSampler_6d832d1900eafbea = function (e, n) {
            c(e).deleteSampler(c(n));
          }),
          (n.wbg.__wbg_deleteSync_f8f026807b7eee54 = function (e, n) {
            c(e).deleteSync(c(n));
          }),
          (n.wbg.__wbg_deleteVertexArray_dc4f1b2e5ac93f24 = function (e, n) {
            c(e).deleteVertexArray(c(n));
          }),
          (n.wbg.__wbg_drawArraysInstanced_1222b6236d008088 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).drawArraysInstanced(n >>> 0, _, t, r);
          }),
          (n.wbg.__wbg_drawBuffers_3223f0aeb44f7057 = function (e, n) {
            c(e).drawBuffers(c(n));
          }),
          (n.wbg.__wbg_drawElementsInstanced_b4714f8dd90fd2a8 = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).drawElementsInstanced(n >>> 0, _, t >>> 0, r, b);
          }),
          (n.wbg.__wbg_endQuery_726967da9d5d1ca7 = function (e, n) {
            c(e).endQuery(n >>> 0);
          }),
          (n.wbg.__wbg_fenceSync_fb3e1185847ee462 = function (e, n, _) {
            const t = c(e).fenceSync(n >>> 0, _ >>> 0);
            return l(t) ? 0 : o(t);
          }),
          (n.wbg.__wbg_framebufferTextureLayer_e644333b8ec36f9d = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).framebufferTextureLayer(n >>> 0, _ >>> 0, c(t), r, b);
          }),
          (n.wbg.__wbg_getBufferSubData_cd8138c86821bca3 = function (
            e,
            n,
            _,
            t
          ) {
            c(e).getBufferSubData(n >>> 0, _, c(t));
          }),
          (n.wbg.__wbg_getIndexedParameter_5f5c79f6c05edd18 = function () {
            return R(function (e, n, _) {
              return o(c(e).getIndexedParameter(n >>> 0, _ >>> 0));
            }, arguments);
          }),
          (n.wbg.__wbg_getQueryParameter_e0f43fb85f793bbe = function (e, n, _) {
            return o(c(e).getQueryParameter(c(n), _ >>> 0));
          }),
          (n.wbg.__wbg_getSyncParameter_b2f55318719e958c = function (e, n, _) {
            return o(c(e).getSyncParameter(c(n), _ >>> 0));
          }),
          (n.wbg.__wbg_getUniformBlockIndex_a05b0c144aa49817 = function (
            e,
            n,
            _,
            t
          ) {
            return c(e).getUniformBlockIndex(c(n), d(_, t));
          }),
          (n.wbg.__wbg_invalidateFramebuffer_696c3c456c34a207 = function () {
            return R(function (e, n, _) {
              c(e).invalidateFramebuffer(n >>> 0, c(_));
            }, arguments);
          }),
          (n.wbg.__wbg_readBuffer_bade27c1171e00cf = function (e, n) {
            c(e).readBuffer(n >>> 0);
          }),
          (n.wbg.__wbg_readPixels_493558abd28a3b61 = function () {
            return R(function (e, n, _, t, r, b, f, a) {
              c(e).readPixels(n, _, t, r, b >>> 0, f >>> 0, c(a));
            }, arguments);
          }),
          (n.wbg.__wbg_readPixels_92102ee9fe1c81a0 = function () {
            return R(function (e, n, _, t, r, b, f, a) {
              c(e).readPixels(n, _, t, r, b >>> 0, f >>> 0, a);
            }, arguments);
          }),
          (n.wbg.__wbg_renderbufferStorageMultisample_9cb173d2fd461513 =
            function (e, n, _, t, r, b) {
              c(e).renderbufferStorageMultisample(n >>> 0, _, t >>> 0, r, b);
            }),
          (n.wbg.__wbg_samplerParameterf_38ca759dc5c40461 = function (
            e,
            n,
            _,
            t
          ) {
            c(e).samplerParameterf(c(n), _ >>> 0, t);
          }),
          (n.wbg.__wbg_samplerParameteri_c631c02ceefc6dc1 = function (
            e,
            n,
            _,
            t
          ) {
            c(e).samplerParameteri(c(n), _ >>> 0, t);
          }),
          (n.wbg.__wbg_texImage2D_45fa34937f0d41eb = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o, i) {
              c(e).texImage2D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a >>> 0,
                u >>> 0,
                0 === o ? void 0 : L(o, i)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texStorage2D_89c29252632da923 = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).texStorage2D(n >>> 0, _, t >>> 0, r, b);
          }),
          (n.wbg.__wbg_texStorage3D_3897fb6b91eb82d8 = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f
          ) {
            c(e).texStorage3D(n >>> 0, _, t >>> 0, r, b, f);
          }),
          (n.wbg.__wbg_texSubImage2D_6a8b0f3381d734c3 = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o) {
              c(e).texSubImage2D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a >>> 0,
                u >>> 0,
                c(o)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_53b6a050a0b9b24e = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o) {
              c(e).texSubImage2D(n >>> 0, _, t, r, b, f, a >>> 0, u >>> 0, o);
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_75941cc7af95dbe0 = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o) {
              c(e).texSubImage2D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a >>> 0,
                u >>> 0,
                c(o)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_eec64ab194e54dc5 = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o) {
              c(e).texSubImage2D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a >>> 0,
                u >>> 0,
                c(o)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_bb1504dd3641be28 = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o) {
              c(e).texSubImage2D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a >>> 0,
                u >>> 0,
                c(o)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_84ef903e11598af0 = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o, i, g) {
              c(e).texSubImage3D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a,
                u,
                o >>> 0,
                i >>> 0,
                g
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_f563114226a95faf = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o, i, g) {
              c(e).texSubImage3D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a,
                u,
                o >>> 0,
                i >>> 0,
                c(g)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_0a4fbb250617ca13 = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o, i, g) {
              c(e).texSubImage3D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a,
                u,
                o >>> 0,
                i >>> 0,
                c(g)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_e8042ab768cdd214 = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o, i, g) {
              c(e).texSubImage3D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a,
                u,
                o >>> 0,
                i >>> 0,
                c(g)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_1d82135e9ce965bf = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o, i, g) {
              c(e).texSubImage3D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a,
                u,
                o >>> 0,
                i >>> 0,
                c(g)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_uniform2fv_ffd0b1d3c3a4070a = function (e, n, _, t) {
            c(e).uniform2fv(c(n), C(_, t));
          }),
          (n.wbg.__wbg_uniform2iv_32329f9a4d491136 = function (e, n, _, t) {
            c(e).uniform2iv(c(n), O(_, t));
          }),
          (n.wbg.__wbg_uniform3fv_bc831e48acb2c057 = function (e, n, _, t) {
            c(e).uniform3fv(c(n), C(_, t));
          }),
          (n.wbg.__wbg_uniform3iv_100a284f5a3cbca5 = function (e, n, _, t) {
            c(e).uniform3iv(c(n), O(_, t));
          }),
          (n.wbg.__wbg_uniform4fv_26d822da5c3fdb00 = function (e, n, _, t) {
            c(e).uniform4fv(c(n), C(_, t));
          }),
          (n.wbg.__wbg_uniform4iv_7f03c41e6e49bbd6 = function (e, n, _, t) {
            c(e).uniform4iv(c(n), O(_, t));
          }),
          (n.wbg.__wbg_uniformBlockBinding_1971f4528d9c3043 = function (
            e,
            n,
            _,
            t
          ) {
            c(e).uniformBlockBinding(c(n), _ >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_uniformMatrix2fv_5f1f56c7cbfb533f = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).uniformMatrix2fv(c(n), 0 !== _, C(t, r));
          }),
          (n.wbg.__wbg_uniformMatrix3fv_ae9271db8127a57b = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).uniformMatrix3fv(c(n), 0 !== _, C(t, r));
          }),
          (n.wbg.__wbg_uniformMatrix4fv_0f42d678a568ded9 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).uniformMatrix4fv(c(n), 0 !== _, C(t, r));
          }),
          (n.wbg.__wbg_vertexAttribDivisor_77f020121066a4d9 = function (
            e,
            n,
            _
          ) {
            c(e).vertexAttribDivisor(n >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_vertexAttribIPointer_b15ad1437a268cf5 = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).vertexAttribIPointer(n >>> 0, _, t >>> 0, r, b);
          }),
          (n.wbg.__wbg_activeTexture_0daf7c1698e49f00 = function (e, n) {
            c(e).activeTexture(n >>> 0);
          }),
          (n.wbg.__wbg_attachShader_3038234860d2d59d = function (e, n, _) {
            c(e).attachShader(c(n), c(_));
          }),
          (n.wbg.__wbg_bindBuffer_9cb064991696b79f = function (e, n, _) {
            c(e).bindBuffer(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_bindFramebuffer_0522db2a250c29f0 = function (e, n, _) {
            c(e).bindFramebuffer(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_bindRenderbuffer_1e4928d9bf839c02 = function (e, n, _) {
            c(e).bindRenderbuffer(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_bindTexture_0c284b1604ba527c = function (e, n, _) {
            c(e).bindTexture(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_blendColor_a17ddceb3534e0b3 = function (e, n, _, t, r) {
            c(e).blendColor(n, _, t, r);
          }),
          (n.wbg.__wbg_blendEquation_b5d5be767bd3835a = function (e, n) {
            c(e).blendEquation(n >>> 0);
          }),
          (n.wbg.__wbg_blendEquationSeparate_d2fa3b718ee3579f = function (
            e,
            n,
            _
          ) {
            c(e).blendEquationSeparate(n >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_blendFunc_d456b0c766f8dbc9 = function (e, n, _) {
            c(e).blendFunc(n >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_blendFuncSeparate_9a7146974b3cd76d = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).blendFuncSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_colorMask_a7f067283ed312c9 = function (e, n, _, t, r) {
            c(e).colorMask(0 !== n, 0 !== _, 0 !== t, 0 !== r);
          }),
          (n.wbg.__wbg_compileShader_af777dd3b15798b3 = function (e, n) {
            c(e).compileShader(c(n));
          }),
          (n.wbg.__wbg_copyTexSubImage2D_47b14ff8459fd4c8 = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f,
            a,
            u
          ) {
            c(e).copyTexSubImage2D(n >>> 0, _, t, r, b, f, a, u);
          }),
          (n.wbg.__wbg_createBuffer_5ed0554ab35780b5 = function (e) {
            const n = c(e).createBuffer();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createFramebuffer_86883935c13ddd59 = function (e) {
            const n = c(e).createFramebuffer();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createProgram_7d25c1dd3bb0ce39 = function (e) {
            const n = c(e).createProgram();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createRenderbuffer_b392324e044d389a = function (e) {
            const n = c(e).createRenderbuffer();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createShader_96339db58713e350 = function (e, n) {
            const _ = c(e).createShader(n >>> 0);
            return l(_) ? 0 : o(_);
          }),
          (n.wbg.__wbg_createTexture_c651f9e28d1ce9d2 = function (e) {
            const n = c(e).createTexture();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_cullFace_79e4ddbea13278b3 = function (e, n) {
            c(e).cullFace(n >>> 0);
          }),
          (n.wbg.__wbg_deleteBuffer_cf67a696a7857b3f = function (e, n) {
            c(e).deleteBuffer(c(n));
          }),
          (n.wbg.__wbg_deleteFramebuffer_f9c2bceeb5422d9d = function (e, n) {
            c(e).deleteFramebuffer(c(n));
          }),
          (n.wbg.__wbg_deleteProgram_9c8fa1ef341cb01d = function (e, n) {
            c(e).deleteProgram(c(n));
          }),
          (n.wbg.__wbg_deleteRenderbuffer_cad502ac8d1398f2 = function (e, n) {
            c(e).deleteRenderbuffer(c(n));
          }),
          (n.wbg.__wbg_deleteShader_f48f72524f5ee3ed = function (e, n) {
            c(e).deleteShader(c(n));
          }),
          (n.wbg.__wbg_deleteTexture_1b5f5e536e0d5545 = function (e, n) {
            c(e).deleteTexture(c(n));
          }),
          (n.wbg.__wbg_depthFunc_2060ec3687ac1f95 = function (e, n) {
            c(e).depthFunc(n >>> 0);
          }),
          (n.wbg.__wbg_depthMask_27d367443a80541d = function (e, n) {
            c(e).depthMask(0 !== n);
          }),
          (n.wbg.__wbg_depthRange_7109c2393819a37b = function (e, n, _) {
            c(e).depthRange(n, _);
          }),
          (n.wbg.__wbg_disable_3adb8645ea1d92d4 = function (e, n) {
            c(e).disable(n >>> 0);
          }),
          (n.wbg.__wbg_disableVertexAttribArray_f469283fda607cee = function (
            e,
            n
          ) {
            c(e).disableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_drawArrays_84de8a2416396807 = function (e, n, _, t) {
            c(e).drawArrays(n >>> 0, _, t);
          }),
          (n.wbg.__wbg_enable_1ac9f14a577b7c8b = function (e, n) {
            c(e).enable(n >>> 0);
          }),
          (n.wbg.__wbg_enableVertexAttribArray_53139716d9c95dba = function (
            e,
            n
          ) {
            c(e).enableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_framebufferRenderbuffer_77bdb2f359a5728f = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).framebufferRenderbuffer(n >>> 0, _ >>> 0, t >>> 0, c(r));
          }),
          (n.wbg.__wbg_framebufferTexture2D_885176f16a153fec = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).framebufferTexture2D(n >>> 0, _ >>> 0, t >>> 0, c(r), b);
          }),
          (n.wbg.__wbg_frontFace_3d7784c56ffede8a = function (e, n) {
            c(e).frontFace(n >>> 0);
          }),
          (n.wbg.__wbg_getActiveUniform_9c4ac7c1ccf5f894 = function (e, n, _) {
            const t = c(e).getActiveUniform(c(n), _ >>> 0);
            return l(t) ? 0 : o(t);
          }),
          (n.wbg.__wbg_getError_a472f86b6aa9ea71 = function (e) {
            return c(e).getError();
          }),
          (n.wbg.__wbg_getExtension_f0070583175271d4 = function () {
            return R(function (e, n, _) {
              const t = c(e).getExtension(d(n, _));
              return l(t) ? 0 : o(t);
            }, arguments);
          }),
          (n.wbg.__wbg_getParameter_56d47f9b55e463d4 = function () {
            return R(function (e, n) {
              return o(c(e).getParameter(n >>> 0));
            }, arguments);
          }),
          (n.wbg.__wbg_getProgramInfoLog_7654794297967ac0 = function (e, n, _) {
            const t = c(n).getProgramInfoLog(c(_));
            var r = l(t) ? 0 : v(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = h;
            (y()[e / 4 + 1] = f), (y()[e / 4 + 0] = r);
          }),
          (n.wbg.__wbg_getProgramParameter_5b1a40917aa850f8 = function (
            e,
            n,
            _
          ) {
            return o(c(e).getProgramParameter(c(n), _ >>> 0));
          }),
          (n.wbg.__wbg_getShaderInfoLog_915d0e8506c11159 = function (e, n, _) {
            const t = c(n).getShaderInfoLog(c(_));
            var r = l(t) ? 0 : v(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = h;
            (y()[e / 4 + 1] = f), (y()[e / 4 + 0] = r);
          }),
          (n.wbg.__wbg_getShaderParameter_f9240892c9e7a0a3 = function (
            e,
            n,
            _
          ) {
            return o(c(e).getShaderParameter(c(n), _ >>> 0));
          }),
          (n.wbg.__wbg_getSupportedExtensions_7af8f7bbdd4d7b2c = function (e) {
            const n = c(e).getSupportedExtensions();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_getUniformLocation_c6caabb349b43da7 = function (
            e,
            n,
            _,
            t
          ) {
            const r = c(e).getUniformLocation(c(n), d(_, t));
            return l(r) ? 0 : o(r);
          }),
          (n.wbg.__wbg_linkProgram_2d5cc584654696b8 = function (e, n) {
            c(e).linkProgram(c(n));
          }),
          (n.wbg.__wbg_pixelStorei_a0b83efc92cd29fe = function (e, n, _) {
            c(e).pixelStorei(n >>> 0, _);
          }),
          (n.wbg.__wbg_polygonOffset_03d3955d5a1afa08 = function (e, n, _) {
            c(e).polygonOffset(n, _);
          }),
          (n.wbg.__wbg_renderbufferStorage_2192d9cd09128339 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).renderbufferStorage(n >>> 0, _ >>> 0, t, r);
          }),
          (n.wbg.__wbg_scissor_2b084e0dc81d67f4 = function (e, n, _, t, r) {
            c(e).scissor(n, _, t, r);
          }),
          (n.wbg.__wbg_shaderSource_57883245cdfb0dca = function (e, n, _, t) {
            c(e).shaderSource(c(n), d(_, t));
          }),
          (n.wbg.__wbg_stencilFuncSeparate_3be68afd7ca6efcc = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).stencilFuncSeparate(n >>> 0, _ >>> 0, t, r >>> 0);
          }),
          (n.wbg.__wbg_stencilMask_144b86d15d9fdbe6 = function (e, n) {
            c(e).stencilMask(n >>> 0);
          }),
          (n.wbg.__wbg_stencilMaskSeparate_84a2494b967772c7 = function (
            e,
            n,
            _
          ) {
            c(e).stencilMaskSeparate(n >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_stencilOpSeparate_1708aea1aea0dc48 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).stencilOpSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_texParameteri_e0ce3810261e0864 = function (e, n, _, t) {
            c(e).texParameteri(n >>> 0, _ >>> 0, t);
          }),
          (n.wbg.__wbg_uniform1f_dcc6951bde745417 = function (e, n, _) {
            c(e).uniform1f(c(n), _);
          }),
          (n.wbg.__wbg_uniform1i_4fdc6d6740375d22 = function (e, n, _) {
            c(e).uniform1i(c(n), _);
          }),
          (n.wbg.__wbg_uniform4f_19b349303edb7836 = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).uniform4f(c(n), _, t, r, b);
          }),
          (n.wbg.__wbg_useProgram_2f4094faf45ecba1 = function (e, n) {
            c(e).useProgram(c(n));
          }),
          (n.wbg.__wbg_vertexAttribPointer_ad370785358334f4 = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f
          ) {
            c(e).vertexAttribPointer(n >>> 0, _, t >>> 0, 0 !== r, b, f);
          }),
          (n.wbg.__wbg_viewport_cc41e28a71c23915 = function (e, n, _, t, r) {
            c(e).viewport(n, _, t, r);
          }),
          (n.wbg.__wbg_instanceof_Window_e266f02eee43b570 = function (e) {
            let n;
            try {
              n = c(e) instanceof Window;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_document_950215a728589a2d = function (e) {
            const n = c(e).document;
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_location_797a1856892cc2de = function (e) {
            return o(c(e).location);
          }),
          (n.wbg.__wbg_devicePixelRatio_5f8f5cab76864090 = function (e) {
            return c(e).devicePixelRatio;
          }),
          (n.wbg.__wbg_localStorage_42608208af988a02 = function () {
            return R(function (e) {
              const n = c(e).localStorage;
              return l(n) ? 0 : o(n);
            }, arguments);
          }),
          (n.wbg.__wbg_cancelAnimationFrame_d079cdb83bc43b26 = function () {
            return R(function (e, n) {
              c(e).cancelAnimationFrame(n);
            }, arguments);
          }),
          (n.wbg.__wbg_focus_501a2f26ca842755 = function () {
            return R(function (e) {
              c(e).focus();
            }, arguments);
          }),
          (n.wbg.__wbg_open_caf5dfe2d159a600 = function () {
            return R(function (e, n, _, t, r) {
              const b = c(e).open(d(n, _), d(t, r));
              return l(b) ? 0 : o(b);
            }, arguments);
          }),
          (n.wbg.__wbg_requestAnimationFrame_afe426b568f84138 = function () {
            return R(function (e, n) {
              return c(e).requestAnimationFrame(c(n));
            }, arguments);
          }),
          (n.wbg.__wbg_fetch_465e8cb61a0f43ea = function (e, n) {
            return o(c(e).fetch(c(n)));
          }),
          (n.wbg.__wbg_length_3d941f2faff8f45f = function (e) {
            return c(e).length;
          }),
          (n.wbg.__wbg_setbuffer_bad384d1628a8306 = function (e, n) {
            c(e).buffer = c(n);
          }),
          (n.wbg.__wbg_setonended_15b13187aec41ac9 = function (e, n) {
            c(e).onended = c(n);
          }),
          (n.wbg.__wbg_start_9169e040a16354b9 = function () {
            return R(function (e, n) {
              c(e).start(n);
            }, arguments);
          }),
          (n.wbg.__wbg_connect_77f2f818a74097e1 = function () {
            return R(function (e, n) {
              return o(c(e).connect(c(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_bindVertexArrayOES_688eba003a98a0bb = function (e, n) {
            c(e).bindVertexArrayOES(c(n));
          }),
          (n.wbg.__wbg_createVertexArrayOES_02cfe655604046eb = function (e) {
            const n = c(e).createVertexArrayOES();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_deleteVertexArrayOES_ba22911f739464a7 = function (e, n) {
            c(e).deleteVertexArrayOES(c(n));
          }),
          (n.wbg.__wbg_pointerId_d2caae4465ba386f = function (e) {
            return c(e).pointerId;
          }),
          (n.wbg.__wbg_deltaY_b32fa858e16edcc0 = function (e) {
            return c(e).deltaY;
          }),
          (n.wbg.__wbg_deltaMode_11f7b19e64d9a515 = function (e) {
            return c(e).deltaMode;
          }),
          (n.wbg.__wbg_new_91fc1a4631302ab0 = function () {
            return R(function () {
              return o(new Path2D());
            }, arguments);
          }),
          (n.wbg.__wbg_addPath_a432e963af597979 = function (e, n, _) {
            c(e).addPath(c(n), c(_));
          }),
          (n.wbg.__wbg_closePath_2502f819d3c4221a = function (e) {
            c(e).closePath();
          }),
          (n.wbg.__wbg_lineTo_ee1745e5c68d4536 = function (e, n, _) {
            c(e).lineTo(n, _);
          }),
          (n.wbg.__wbg_moveTo_6d6ab8291735715c = function (e, n, _) {
            c(e).moveTo(n, _);
          }),
          (n.wbg.__wbg_quadraticCurveTo_784a886737574a7b = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).quadraticCurveTo(n, _, t, r);
          }),
          (n.wbg.__wbg_rect_d4f6bcd28d1ccc7c = function (e, n, _, t, r) {
            c(e).rect(n, _, t, r);
          }),
          (n.wbg.__wbg_now_c644db5194be8437 = function (e) {
            return c(e).now();
          }),
          (n.wbg.__wbg_setTransform_756fc659a51a3e91 = function (e, n) {
            c(e).setTransform(c(n));
          }),
          (n.wbg.__wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe =
            function (e) {
              let n;
              try {
                n = c(e) instanceof HTMLCanvasElement;
              } catch {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_width_a40e21a22129b197 = function (e) {
            return c(e).width;
          }),
          (n.wbg.__wbg_setwidth_81c62bc806e0a727 = function (e, n) {
            c(e).width = n >>> 0;
          }),
          (n.wbg.__wbg_height_98d51321254345a5 = function (e) {
            return c(e).height;
          }),
          (n.wbg.__wbg_setheight_98cf0db22c40ef07 = function (e, n) {
            c(e).height = n >>> 0;
          }),
          (n.wbg.__wbg_getContext_3ae404b649cf9287 = function () {
            return R(function (e, n, _) {
              const t = c(e).getContext(d(n, _));
              return l(t) ? 0 : o(t);
            }, arguments);
          }),
          (n.wbg.__wbg_getContext_89a318b610dc5fd4 = function () {
            return R(function (e, n, _, t) {
              const r = c(e).getContext(d(n, _), c(t));
              return l(r) ? 0 : o(r);
            }, arguments);
          }),
          (n.wbg.__wbg_drawBuffersWEBGL_dfb0d803ea7ebe07 = function (e, n) {
            c(e).drawBuffersWEBGL(c(n));
          }),
          (n.wbg.__wbg_videoWidth_41c6e04eac7ce78b = function (e) {
            return c(e).videoWidth;
          }),
          (n.wbg.__wbg_videoHeight_8ef0e09e1674d6fc = function (e) {
            return c(e).videoHeight;
          }),
          (n.wbg.__wbg_newwithstrandinit_c45f0dc6da26fd03 = function () {
            return R(function (e, n, _) {
              return o(new Request(d(e, n), c(_)));
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_CanvasRenderingContext2d_3e95629461ed9f67 =
            function (e) {
              let n;
              try {
                n = c(e) instanceof CanvasRenderingContext2D;
              } catch {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_setglobalAlpha_9b247016ca5b7baf = function (e, n) {
            c(e).globalAlpha = n;
          }),
          (n.wbg.__wbg_setglobalCompositeOperation_7c8142daf951a34d =
            function () {
              return R(function (e, n, _) {
                c(e).globalCompositeOperation = d(n, _);
              }, arguments);
            }),
          (n.wbg.__wbg_setstrokeStyle_073fc10b086c1727 = function (e, n) {
            c(e).strokeStyle = c(n);
          }),
          (n.wbg.__wbg_setfillStyle_b065cfad34a78974 = function (e, n) {
            c(e).fillStyle = c(n);
          }),
          (n.wbg.__wbg_setfilter_39d01028434c0e3c = function (e, n, _) {
            c(e).filter = d(n, _);
          }),
          (n.wbg.__wbg_setimageSmoothingEnabled_bf2992e4332c028e = function (
            e,
            n
          ) {
            c(e).imageSmoothingEnabled = 0 !== n;
          }),
          (n.wbg.__wbg_setlineWidth_2b5a5da5c4bf4084 = function (e, n) {
            c(e).lineWidth = n;
          }),
          (n.wbg.__wbg_setlineCap_a2933c0b1d64ae1b = function (e, n, _) {
            c(e).lineCap = d(n, _);
          }),
          (n.wbg.__wbg_setlineJoin_a630a26a037775c0 = function (e, n, _) {
            c(e).lineJoin = d(n, _);
          }),
          (n.wbg.__wbg_setmiterLimit_9632926e0263a940 = function (e, n) {
            c(e).miterLimit = n;
          }),
          (n.wbg.__wbg_drawImage_595c29d3eb1971b5 = function () {
            return R(function (e, n, _, t) {
              c(e).drawImage(c(n), _, t);
            }, arguments);
          }),
          (n.wbg.__wbg_clip_3076bfd713f8dbdf = function (e, n, _) {
            c(e).clip(c(n), u(_));
          }),
          (n.wbg.__wbg_fill_f544035cc39a9a33 = function (e, n, _) {
            c(e).fill(c(n), u(_));
          }),
          (n.wbg.__wbg_stroke_f3b4581ac28cc0a3 = function (e, n) {
            c(e).stroke(c(n));
          }),
          (n.wbg.__wbg_createLinearGradient_07e75b1061695061 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            return o(c(e).createLinearGradient(n, _, t, r));
          }),
          (n.wbg.__wbg_createPattern_ffbbf4d7c9d4d6ec = function () {
            return R(function (e, n, _, t) {
              const r = c(e).createPattern(c(n), d(_, t));
              return l(r) ? 0 : o(r);
            }, arguments);
          }),
          (n.wbg.__wbg_createRadialGradient_fc473c7e83808cb8 = function () {
            return R(function (e, n, _, t, r, b, f) {
              return o(c(e).createRadialGradient(n, _, t, r, b, f));
            }, arguments);
          }),
          (n.wbg.__wbg_putImageData_3d6a58a9eb5f743c = function () {
            return R(function (e, n, _, t) {
              c(e).putImageData(c(n), _, t);
            }, arguments);
          }),
          (n.wbg.__wbg_clearRect_92c5351269c74162 = function (e, n, _, t, r) {
            c(e).clearRect(n, _, t, r);
          }),
          (n.wbg.__wbg_fillRect_f63ba845233f000a = function (e, n, _, t, r) {
            c(e).fillRect(n, _, t, r);
          }),
          (n.wbg.__wbg_restore_38b3fc1b40a29757 = function (e) {
            c(e).restore();
          }),
          (n.wbg.__wbg_save_bab01f1913b2e819 = function (e) {
            c(e).save();
          }),
          (n.wbg.__wbg_resetTransform_cb5911b6d0ba3407 = function () {
            return R(function (e) {
              c(e).resetTransform();
            }, arguments);
          }),
          (n.wbg.__wbg_setTransform_a0b25774ef0bfce8 = function () {
            return R(function (e, n, _, t, r, b, f) {
              c(e).setTransform(n, _, t, r, b, f);
            }, arguments);
          }),
          (n.wbg.__wbg_transform_a73a1d3cba69df05 = function () {
            return R(function (e, n, _, t, r, b, f) {
              c(e).transform(n, _, t, r, b, f);
            }, arguments);
          }),
          (n.wbg.__wbg_key_f0decac219aa904b = function (e, n) {
            const _ = v(c(n).key, b.__wbindgen_malloc, b.__wbindgen_realloc),
              t = h;
            (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
          }),
          (n.wbg.__wbg_code_aed21120de275a12 = function (e, n) {
            const _ = v(c(n).code, b.__wbindgen_malloc, b.__wbindgen_realloc),
              t = h;
            (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
          }),
          (n.wbg.__wbg_body_be46234bb33edd63 = function (e) {
            const n = c(e).body;
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createElement_e2a0e21263eb5416 = function () {
            return R(function (e, n, _) {
              return o(c(e).createElement(d(n, _)));
            }, arguments);
          }),
          (n.wbg.__wbg_createElementNS_0047de728927ea00 = function () {
            return R(function (e, n, _, t, r) {
              return o(
                c(e).createElementNS(0 === n ? void 0 : d(n, _), d(t, r))
              );
            }, arguments);
          }),
          (n.wbg.__wbg_querySelector_32b9d7ebb2df951d = function () {
            return R(function (e, n, _) {
              const t = c(e).querySelector(d(n, _));
              return l(t) ? 0 : o(t);
            }, arguments);
          }),
          (n.wbg.__wbg_newwithbuffersourcesequenceandoptions_a27e5c2fc0c23746 =
            function () {
              return R(function (e, n) {
                return o(new Blob(c(e), c(n)));
              }, arguments);
            }),
          (n.wbg.__wbg_a_ba51426af54c677a = function (e) {
            return c(e).a;
          }),
          (n.wbg.__wbg_seta_d92bb829a04c9bc2 = function (e, n) {
            c(e).a = n;
          }),
          (n.wbg.__wbg_b_e353e5af8fd790ff = function (e) {
            return c(e).b;
          }),
          (n.wbg.__wbg_c_91d2dab8416e22a4 = function (e) {
            return c(e).c;
          }),
          (n.wbg.__wbg_d_9120f075783411ea = function (e) {
            return c(e).d;
          }),
          (n.wbg.__wbg_setd_5f7fd53a3541c258 = function (e, n) {
            c(e).d = n;
          }),
          (n.wbg.__wbg_e_65a8131ab187edae = function (e) {
            return c(e).e;
          }),
          (n.wbg.__wbg_f_1302e186f63f1fc6 = function (e) {
            return c(e).f;
          }),
          (n.wbg.__wbg_new_41b8477bcd57c70f = function () {
            return R(function () {
              return o(new DOMMatrix());
            }, arguments);
          }),
          (n.wbg.__wbg_newwitharray64_14a5abd2f65d41fc = function () {
            return R(function (e, n) {
              var _, t;
              return o(
                new DOMMatrix(
                  ((_ = e), (t = n), m().subarray(_ / 8, _ / 8 + t))
                )
              );
            }, arguments);
          }),
          (n.wbg.__wbg_addEventListener_615d4590d38da1c9 = function () {
            return R(function (e, n, _, t) {
              c(e).addEventListener(d(n, _), c(t));
            }, arguments);
          }),
          (n.wbg.__wbg_addEventListener_cf5b03cd29763277 = function () {
            return R(function (e, n, _, t, r) {
              c(e).addEventListener(d(n, _), c(t), c(r));
            }, arguments);
          }),
          (n.wbg.__wbg_addEventListener_b1286394a632c3c9 = function () {
            return R(function (e, n, _, t, r) {
              c(e).addEventListener(d(n, _), c(t), 0 !== r);
            }, arguments);
          }),
          (n.wbg.__wbg_removeEventListener_86fd19ed073cd1ed = function () {
            return R(function (e, n, _, t) {
              c(e).removeEventListener(d(n, _), c(t));
            }, arguments);
          }),
          (n.wbg.__wbg_removeEventListener_b25f5db74f767386 = function () {
            return R(function (e, n, _, t, r) {
              c(e).removeEventListener(d(n, _), c(t), 0 !== r);
            }, arguments);
          }),
          (n.wbg.__wbg_baseURI_183bb1b65bdb30f8 = function () {
            return R(function (e, n) {
              const _ = c(n).baseURI;
              var t = l(_)
                  ? 0
                  : v(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
                r = h;
              (y()[e / 4 + 1] = r), (y()[e / 4 + 0] = t);
            }, arguments);
          }),
          (n.wbg.__wbg_appendChild_b8199dc1655c852d = function () {
            return R(function (e, n) {
              return o(c(e).appendChild(c(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_setid_3ffcf3ad6af1d07c = function (e, n, _) {
            c(e).id = d(n, _);
          }),
          (n.wbg.__wbg_clientWidth_1fa51f20a3bebbbf = function (e) {
            return c(e).clientWidth;
          }),
          (n.wbg.__wbg_clientHeight_0fe149fdad1fe046 = function (e) {
            return c(e).clientHeight;
          }),
          (n.wbg.__wbg_querySelector_de6e6a6226107104 = function () {
            return R(function (e, n, _) {
              const t = c(e).querySelector(d(n, _));
              return l(t) ? 0 : o(t);
            }, arguments);
          }),
          (n.wbg.__wbg_releasePointerCapture_b0063bfa1890f17b = function () {
            return R(function (e, n) {
              c(e).releasePointerCapture(n);
            }, arguments);
          }),
          (n.wbg.__wbg_setAttribute_79c9562d32d05e66 = function () {
            return R(function (e, n, _, t, r) {
              c(e).setAttribute(d(n, _), d(t, r));
            }, arguments);
          }),
          (n.wbg.__wbg_setAttributeNS_6226a35b93f5c79c = function () {
            return R(function (e, n, _, t, r, b, f) {
              c(e).setAttributeNS(0 === n ? void 0 : d(n, _), d(t, r), d(b, f));
            }, arguments);
          }),
          (n.wbg.__wbg_setPointerCapture_5479dc0d082282b7 = function () {
            return R(function (e, n) {
              c(e).setPointerCapture(n);
            }, arguments);
          }),
          (n.wbg.__wbg_remove_b18bc815630b67ec = function (e) {
            c(e).remove();
          }),
          (n.wbg.__wbg_currentTarget_6aa9bd5069eb82e8 = function (e) {
            const n = c(e).currentTarget;
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_preventDefault_16b2170b12f56317 = function (e) {
            c(e).preventDefault();
          }),
          (n.wbg.__wbg_newwithu8clampedarray_21093ce0fda74d0a = function () {
            return R(function (e, n, _) {
              return o(
                new ImageData(
                  ((t = e),
                  (r = n),
                  ((null !== W && 0 !== W.byteLength) ||
                    (W = new Uint8ClampedArray(b.memory.buffer)),
                  W).subarray(t / 1, t / 1 + r)),
                  _ >>> 0
                )
              );
              var t, r;
            }, arguments);
          }),
          (n.wbg.__wbg_href_bb86bb94d1c6861b = function () {
            return R(function (e, n) {
              const _ = v(c(n).href, b.__wbindgen_malloc, b.__wbindgen_realloc),
                t = h;
              (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
            }, arguments);
          }),
          (n.wbg.__wbg_protocol_3767aa51aa3121ca = function () {
            return R(function (e, n) {
              const _ = v(
                  c(n).protocol,
                  b.__wbindgen_malloc,
                  b.__wbindgen_realloc
                ),
                t = h;
              (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
            }, arguments);
          }),
          (n.wbg.__wbg_assign_6a2665722c186353 = function () {
            return R(function (e, n, _) {
              c(e).assign(d(n, _));
            }, arguments);
          }),
          (n.wbg.__wbg_width_8a17f65e11a44bf6 = function (e) {
            return c(e).width;
          }),
          (n.wbg.__wbg_height_641410e41fce27a6 = function (e) {
            return c(e).height;
          }),
          (n.wbg.__wbg_get_bbc28d9c36fb00ee = function () {
            return R(function (e, n, _, t) {
              const r = c(n)[d(_, t)];
              var f = l(r)
                  ? 0
                  : v(r, b.__wbindgen_malloc, b.__wbindgen_realloc),
                a = h;
              (y()[e / 4 + 1] = a), (y()[e / 4 + 0] = f);
            }, arguments);
          }),
          (n.wbg.__wbg_set_7165e34f03bd8242 = function () {
            return R(function (e, n, _, t, r) {
              c(e)[d(n, _)] = d(t, r);
            }, arguments);
          }),
          (n.wbg.__wbg_delete_f035c92bf260a2e2 = function () {
            return R(function (e, n, _) {
              delete c(e)[d(n, _)];
            }, arguments);
          }),
          (n.wbg.__wbg_size_5ce324b99223d189 = function (e) {
            return c(e).size;
          }),
          (n.wbg.__wbg_type_979610383a4b7c57 = function (e) {
            return c(e).type;
          }),
          (n.wbg.__wbg_name_1e6651aff4fe7a88 = function (e, n) {
            const _ = v(c(n).name, b.__wbindgen_malloc, b.__wbindgen_realloc),
              t = h;
            (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
          }),
          (n.wbg.__wbg_drawArraysInstancedANGLE_403faa11d52ccf6d = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).drawArraysInstancedANGLE(n >>> 0, _, t, r);
          }),
          (n.wbg.__wbg_drawElementsInstancedANGLE_0230afc27cf9cec9 = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).drawElementsInstancedANGLE(n >>> 0, _, t >>> 0, r, b);
          }),
          (n.wbg.__wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b = function (
            e,
            n,
            _
          ) {
            c(e).vertexAttribDivisorANGLE(n >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_destination_5dfc354bcf2eb941 = function (e) {
            return o(c(e).destination);
          }),
          (n.wbg.__wbg_sampleRate_1fe9798ab15b5fe2 = function (e) {
            return c(e).sampleRate;
          }),
          (n.wbg.__wbg_currentTime_d94729a1b5fd59a5 = function (e) {
            return c(e).currentTime;
          }),
          (n.wbg.__wbg_new_80c6bdc66ebfa0b7 = function () {
            return R(function () {
              return o(new r());
            }, arguments);
          }),
          (n.wbg.__wbg_close_82409a9d656a7c26 = function () {
            return R(function (e) {
              return o(c(e).close());
            }, arguments);
          }),
          (n.wbg.__wbg_suspend_248307f8f9d87bd4 = function () {
            return R(function (e) {
              return o(c(e).suspend());
            }, arguments);
          }),
          (n.wbg.__wbg_createBuffer_d142e00390bff447 = function () {
            return R(function (e, n, _, t) {
              return o(c(e).createBuffer(n >>> 0, _ >>> 0, t));
            }, arguments);
          }),
          (n.wbg.__wbg_createBufferSource_1473226efd418a08 = function () {
            return R(function (e) {
              return o(c(e).createBufferSource());
            }, arguments);
          }),
          (n.wbg.__wbg_resume_72fe7cd3e68b861a = function () {
            return R(function (e) {
              return o(c(e).resume());
            }, arguments);
          }),
          (n.wbg.__wbg_addColorStop_551ac167fe2ad6b1 = function () {
            return R(function (e, n, _, t) {
              c(e).addColorStop(n, d(_, t));
            }, arguments);
          }),
          (n.wbg.__wbg_setProperty_21e2e7868b86a93e = function () {
            return R(function (e, n, _, t, r) {
              c(e).setProperty(d(n, _), d(t, r));
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_HtmlFormElement_04e7484e36bd99d6 = function (
            e
          ) {
            let n;
            try {
              n = c(e) instanceof HTMLFormElement;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_submit_d5162ad94d3182b1 = function () {
            return R(function (e) {
              c(e).submit();
            }, arguments);
          }),
          (n.wbg.__wbg_width_716d2242c9bd6c20 = function (e) {
            return c(e).width;
          }),
          (n.wbg.__wbg_height_d45e4d57562f8ae0 = function (e) {
            return c(e).height;
          }),
          (n.wbg.__wbg_framebufferTextureMultiviewOVR_0ae55d2aa52fd2cb =
            function (e, n, _, t, r, b, f) {
              c(e).framebufferTextureMultiviewOVR(
                n >>> 0,
                _ >>> 0,
                c(t),
                r,
                b,
                f
              );
            }),
          (n.wbg.__wbg_instanceof_WebGlRenderingContext_1f34d107adf90e57 =
            function (e) {
              let n;
              try {
                n = c(e) instanceof WebGLRenderingContext;
              } catch {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_drawingBufferWidth_58a727aa7a345aa8 = function (e) {
            return c(e).drawingBufferWidth;
          }),
          (n.wbg.__wbg_drawingBufferHeight_bd91270bae19069e = function (e) {
            return c(e).drawingBufferHeight;
          }),
          (n.wbg.__wbg_bufferData_05664df801d7aec0 = function (e, n, _, t) {
            c(e).bufferData(n >>> 0, _, t >>> 0);
          }),
          (n.wbg.__wbg_bufferData_023700b2ed207c43 = function (e, n, _, t) {
            c(e).bufferData(n >>> 0, c(_), t >>> 0);
          }),
          (n.wbg.__wbg_bufferData_3daa5b6910265e45 = function (e, n, _, t, r) {
            c(e).bufferData(n >>> 0, L(_, t), r >>> 0);
          }),
          (n.wbg.__wbg_bufferSubData_4e653f611d7a962d = function (e, n, _, t) {
            c(e).bufferSubData(n >>> 0, _, c(t));
          }),
          (n.wbg.__wbg_compressedTexSubImage2D_788296e97b316838 = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f,
            a,
            u
          ) {
            c(e).compressedTexSubImage2D(n >>> 0, _, t, r, b, f, a >>> 0, c(u));
          }),
          (n.wbg.__wbg_readPixels_30de7174c15126d3 = function () {
            return R(function (e, n, _, t, r, b, f, a) {
              c(e).readPixels(n, _, t, r, b >>> 0, f >>> 0, c(a));
            }, arguments);
          }),
          (n.wbg.__wbg_texImage2D_d5a54e57be204e4a = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o, i) {
              c(e).texImage2D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a >>> 0,
                u >>> 0,
                0 === o ? void 0 : L(o, i)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_57792696288b0a61 = function () {
            return R(function (e, n, _, t, r, b, f, a, u, o) {
              c(e).texSubImage2D(
                n >>> 0,
                _,
                t,
                r,
                b,
                f,
                a >>> 0,
                u >>> 0,
                c(o)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_uniform1fv_18139e7937b2eeda = function (e, n, _, t) {
            c(e).uniform1fv(c(n), C(_, t));
          }),
          (n.wbg.__wbg_uniform2fv_c29ce786946f1aae = function (e, n, _, t) {
            c(e).uniform2fv(c(n), C(_, t));
          }),
          (n.wbg.__wbg_uniform2iv_58c3d5ee9e70c71d = function (e, n, _, t) {
            c(e).uniform2iv(c(n), O(_, t));
          }),
          (n.wbg.__wbg_uniform3fv_5ca48b3279e0c643 = function (e, n, _, t) {
            c(e).uniform3fv(c(n), C(_, t));
          }),
          (n.wbg.__wbg_uniform3iv_0a103fe131bd9213 = function (e, n, _, t) {
            c(e).uniform3iv(c(n), O(_, t));
          }),
          (n.wbg.__wbg_uniform4fv_14f1c5ef10bfb4c9 = function (e, n, _, t) {
            c(e).uniform4fv(c(n), C(_, t));
          }),
          (n.wbg.__wbg_uniform4iv_9436eeda2a27cce8 = function (e, n, _, t) {
            c(e).uniform4iv(c(n), O(_, t));
          }),
          (n.wbg.__wbg_uniformMatrix2fv_1a40e9f63b2005c8 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).uniformMatrix2fv(c(n), 0 !== _, C(t, r));
          }),
          (n.wbg.__wbg_uniformMatrix3fv_dcde28ba8c34d30e = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).uniformMatrix3fv(c(n), 0 !== _, C(t, r));
          }),
          (n.wbg.__wbg_uniformMatrix4fv_4575a018c8188146 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).uniformMatrix4fv(c(n), 0 !== _, C(t, r));
          }),
          (n.wbg.__wbg_activeTexture_01d5469eb22c10e7 = function (e, n) {
            c(e).activeTexture(n >>> 0);
          }),
          (n.wbg.__wbg_attachShader_14fb12e2ae589dc3 = function (e, n, _) {
            c(e).attachShader(c(n), c(_));
          }),
          (n.wbg.__wbg_bindBuffer_b7c382dcd70e33f6 = function (e, n, _) {
            c(e).bindBuffer(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_bindFramebuffer_a5ab0ed0463586cb = function (e, n, _) {
            c(e).bindFramebuffer(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_bindRenderbuffer_2d67c879cdbe5ea9 = function (e, n, _) {
            c(e).bindRenderbuffer(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_bindTexture_c1c0e00507424f8e = function (e, n, _) {
            c(e).bindTexture(n >>> 0, c(_));
          }),
          (n.wbg.__wbg_blendColor_13739d87434b79c3 = function (e, n, _, t, r) {
            c(e).blendColor(n, _, t, r);
          }),
          (n.wbg.__wbg_blendEquation_562c3267161e4675 = function (e, n) {
            c(e).blendEquation(n >>> 0);
          }),
          (n.wbg.__wbg_blendEquationSeparate_48b95e78f7224be4 = function (
            e,
            n,
            _
          ) {
            c(e).blendEquationSeparate(n >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_blendFunc_f4365f78b650180f = function (e, n, _) {
            c(e).blendFunc(n >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_blendFuncSeparate_b508053691b6ebbe = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).blendFuncSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_clear_edebb12717625e22 = function (e, n) {
            c(e).clear(n >>> 0);
          }),
          (n.wbg.__wbg_clearColor_8758a0aef2ed52e4 = function (e, n, _, t, r) {
            c(e).clearColor(n, _, t, r);
          }),
          (n.wbg.__wbg_colorMask_99120a2c8caf1298 = function (e, n, _, t, r) {
            c(e).colorMask(0 !== n, 0 !== _, 0 !== t, 0 !== r);
          }),
          (n.wbg.__wbg_compileShader_4e9130ccbd4a0238 = function (e, n) {
            c(e).compileShader(c(n));
          }),
          (n.wbg.__wbg_copyTexSubImage2D_7c0b0080eece3c1a = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f,
            a,
            u
          ) {
            c(e).copyTexSubImage2D(n >>> 0, _, t, r, b, f, a, u);
          }),
          (n.wbg.__wbg_createBuffer_8c64250e5283611c = function (e) {
            const n = c(e).createBuffer();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createFramebuffer_1f943a32c748753e = function (e) {
            const n = c(e).createFramebuffer();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createProgram_28db0ff3cee5f71a = function (e) {
            const n = c(e).createProgram();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createRenderbuffer_a76dcfda7bdc749a = function (e) {
            const n = c(e).createRenderbuffer();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_createShader_c5fcd8592f47b510 = function (e, n) {
            const _ = c(e).createShader(n >>> 0);
            return l(_) ? 0 : o(_);
          }),
          (n.wbg.__wbg_createTexture_81fd93af28301e0e = function (e) {
            const n = c(e).createTexture();
            return l(n) ? 0 : o(n);
          }),
          (n.wbg.__wbg_cullFace_d4450f8718c6b3eb = function (e, n) {
            c(e).cullFace(n >>> 0);
          }),
          (n.wbg.__wbg_deleteBuffer_17feed38f3a70ec9 = function (e, n) {
            c(e).deleteBuffer(c(n));
          }),
          (n.wbg.__wbg_deleteFramebuffer_130abca01c89b7d6 = function (e, n) {
            c(e).deleteFramebuffer(c(n));
          }),
          (n.wbg.__wbg_deleteProgram_dd5f0e2bc555e270 = function (e, n) {
            c(e).deleteProgram(c(n));
          }),
          (n.wbg.__wbg_deleteRenderbuffer_385f3c9e8759b99e = function (e, n) {
            c(e).deleteRenderbuffer(c(n));
          }),
          (n.wbg.__wbg_deleteShader_fac9fb3cdefdf6ec = function (e, n) {
            c(e).deleteShader(c(n));
          }),
          (n.wbg.__wbg_deleteTexture_605a36a7e380df5f = function (e, n) {
            c(e).deleteTexture(c(n));
          }),
          (n.wbg.__wbg_depthFunc_00d8a905436dc681 = function (e, n) {
            c(e).depthFunc(n >>> 0);
          }),
          (n.wbg.__wbg_depthMask_134f9e3073ca4fd0 = function (e, n) {
            c(e).depthMask(0 !== n);
          }),
          (n.wbg.__wbg_depthRange_f34f19edea1feadd = function (e, n, _) {
            c(e).depthRange(n, _);
          }),
          (n.wbg.__wbg_disable_65425605098b79cf = function (e, n) {
            c(e).disable(n >>> 0);
          }),
          (n.wbg.__wbg_disableVertexAttribArray_cf25f8beb5872364 = function (
            e,
            n
          ) {
            c(e).disableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_drawArrays_e5fa3cfc2b5d7c6d = function (e, n, _, t) {
            c(e).drawArrays(n >>> 0, _, t);
          }),
          (n.wbg.__wbg_drawElements_a388832eba137ef0 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).drawElements(n >>> 0, _, t >>> 0, r);
          }),
          (n.wbg.__wbg_enable_2c3b6a4692af9b1b = function (e, n) {
            c(e).enable(n >>> 0);
          }),
          (n.wbg.__wbg_enableVertexAttribArray_6dd3d0668209ae19 = function (
            e,
            n
          ) {
            c(e).enableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_framebufferRenderbuffer_3bf1420713a0b21a = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).framebufferRenderbuffer(n >>> 0, _ >>> 0, t >>> 0, c(r));
          }),
          (n.wbg.__wbg_framebufferTexture2D_ed03c0674b9979ce = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).framebufferTexture2D(n >>> 0, _ >>> 0, t >>> 0, c(r), b);
          }),
          (n.wbg.__wbg_frontFace_00177185d2fae697 = function (e, n) {
            c(e).frontFace(n >>> 0);
          }),
          (n.wbg.__wbg_getActiveUniform_e49dcda694ae15ab = function (e, n, _) {
            const t = c(e).getActiveUniform(c(n), _ >>> 0);
            return l(t) ? 0 : o(t);
          }),
          (n.wbg.__wbg_getAttribLocation_65a128b3e856d81e = function (
            e,
            n,
            _,
            t
          ) {
            return c(e).getAttribLocation(c(n), d(_, t));
          }),
          (n.wbg.__wbg_getExtension_d1151f6038b08ca5 = function () {
            return R(function (e, n, _) {
              const t = c(e).getExtension(d(n, _));
              return l(t) ? 0 : o(t);
            }, arguments);
          }),
          (n.wbg.__wbg_getParameter_d6cd2dd2cde656ec = function () {
            return R(function (e, n) {
              return o(c(e).getParameter(n >>> 0));
            }, arguments);
          }),
          (n.wbg.__wbg_getProgramInfoLog_7fd2a7c6c1a280c1 = function (e, n, _) {
            const t = c(n).getProgramInfoLog(c(_));
            var r = l(t) ? 0 : v(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = h;
            (y()[e / 4 + 1] = f), (y()[e / 4 + 0] = r);
          }),
          (n.wbg.__wbg_getProgramParameter_af1cfcccbbc80f71 = function (
            e,
            n,
            _
          ) {
            return o(c(e).getProgramParameter(c(n), _ >>> 0));
          }),
          (n.wbg.__wbg_getShaderInfoLog_d057293074e59c61 = function (e, n, _) {
            const t = c(n).getShaderInfoLog(c(_));
            var r = l(t) ? 0 : v(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = h;
            (y()[e / 4 + 1] = f), (y()[e / 4 + 0] = r);
          }),
          (n.wbg.__wbg_getShaderParameter_685d7d7092c6bae6 = function (
            e,
            n,
            _
          ) {
            return o(c(e).getShaderParameter(c(n), _ >>> 0));
          }),
          (n.wbg.__wbg_getUniformLocation_b46e5db76599a918 = function (
            e,
            n,
            _,
            t
          ) {
            const r = c(e).getUniformLocation(c(n), d(_, t));
            return l(r) ? 0 : o(r);
          }),
          (n.wbg.__wbg_linkProgram_ca9df3fba2fd4125 = function (e, n) {
            c(e).linkProgram(c(n));
          }),
          (n.wbg.__wbg_pixelStorei_f97b971917582269 = function (e, n, _) {
            c(e).pixelStorei(n >>> 0, _);
          }),
          (n.wbg.__wbg_polygonOffset_fb73618b77fd3f6f = function (e, n, _) {
            c(e).polygonOffset(n, _);
          }),
          (n.wbg.__wbg_renderbufferStorage_37eab84be1494aef = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).renderbufferStorage(n >>> 0, _ >>> 0, t, r);
          }),
          (n.wbg.__wbg_scissor_8bc2e761846f53f0 = function (e, n, _, t, r) {
            c(e).scissor(n, _, t, r);
          }),
          (n.wbg.__wbg_shaderSource_457e8bc42050401d = function (e, n, _, t) {
            c(e).shaderSource(c(n), d(_, t));
          }),
          (n.wbg.__wbg_stencilFunc_c330e345b19b0f38 = function (e, n, _, t) {
            c(e).stencilFunc(n >>> 0, _, t >>> 0);
          }),
          (n.wbg.__wbg_stencilFuncSeparate_510d3287542b4574 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).stencilFuncSeparate(n >>> 0, _ >>> 0, t, r >>> 0);
          }),
          (n.wbg.__wbg_stencilMask_e1887eeaabe22771 = function (e, n) {
            c(e).stencilMask(n >>> 0);
          }),
          (n.wbg.__wbg_stencilMaskSeparate_e89abefeb5641657 = function (
            e,
            n,
            _
          ) {
            c(e).stencilMaskSeparate(n >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_stencilOp_05f38c743b7da372 = function (e, n, _, t) {
            c(e).stencilOp(n >>> 0, _ >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_stencilOpSeparate_aa3d09aa448a6f48 = function (
            e,
            n,
            _,
            t,
            r
          ) {
            c(e).stencilOpSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_texParameteri_9fbb09bbf9670af4 = function (e, n, _, t) {
            c(e).texParameteri(n >>> 0, _ >>> 0, t);
          }),
          (n.wbg.__wbg_uniform1f_062c683ec584f7e8 = function (e, n, _) {
            c(e).uniform1f(c(n), _);
          }),
          (n.wbg.__wbg_uniform1i_1f8256271b54cf41 = function (e, n, _) {
            c(e).uniform1i(c(n), _);
          }),
          (n.wbg.__wbg_uniform4f_68fac972655f5359 = function (
            e,
            n,
            _,
            t,
            r,
            b
          ) {
            c(e).uniform4f(c(n), _, t, r, b);
          }),
          (n.wbg.__wbg_useProgram_6c9019d05fb8d280 = function (e, n) {
            c(e).useProgram(c(n));
          }),
          (n.wbg.__wbg_vertexAttribPointer_ccabef9be68fe1c4 = function (
            e,
            n,
            _,
            t,
            r,
            b,
            f
          ) {
            c(e).vertexAttribPointer(n >>> 0, _, t >>> 0, 0 !== r, b, f);
          }),
          (n.wbg.__wbg_viewport_4bdfc4b8959593ee = function (e, n, _, t, r) {
            c(e).viewport(n, _, t, r);
          }),
          (n.wbg.__wbg_style_2141664e428fef46 = function (e) {
            return o(c(e).style);
          }),
          (n.wbg.__wbg_inverse_0487daae5bca6389 = function (e) {
            return o(c(e).inverse());
          }),
          (n.wbg.__wbg_offsetX_413d9f02022e72ad = function (e) {
            return c(e).offsetX;
          }),
          (n.wbg.__wbg_offsetY_488f80a0a9666028 = function (e) {
            return c(e).offsetY;
          }),
          (n.wbg.__wbg_button_a1c470d5e4c997f2 = function (e) {
            return c(e).button;
          }),
          (n.wbg.__wbg_instanceof_Response_fb3a4df648c1859b = function (e) {
            let n;
            try {
              n = c(e) instanceof Response;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_url_8ec2534cdfacb103 = function (e, n) {
            const _ = v(c(n).url, b.__wbindgen_malloc, b.__wbindgen_realloc),
              t = h;
            (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
          }),
          (n.wbg.__wbg_ok_1cd4c5ee1ccf4e0f = function (e) {
            return c(e).ok;
          }),
          (n.wbg.__wbg_statusText_9674693c2eb731fa = function (e, n) {
            const _ = v(
                c(n).statusText,
                b.__wbindgen_malloc,
                b.__wbindgen_realloc
              ),
              t = h;
            (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
          }),
          (n.wbg.__wbg_arrayBuffer_cb886e06a9e36e4d = function () {
            return R(function (e) {
              return o(c(e).arrayBuffer());
            }, arguments);
          }),
          (n.wbg.__wbg_get_27fe3dac1c4d0224 = function (e, n) {
            return o(c(e)[n >>> 0]);
          }),
          (n.wbg.__wbg_length_e498fbc24f9c1d4f = function (e) {
            return c(e).length;
          }),
          (n.wbg.__wbg_new_b525de17f44a8943 = function () {
            return o(new Array());
          }),
          (n.wbg.__wbg_newnoargs_2b8b6bd7753c76ba = function (e, n) {
            return o(new Function(d(e, n)));
          }),
          (n.wbg.__wbg_next_88560ec06a094dea = function () {
            return R(function (e) {
              return o(c(e).next());
            }, arguments);
          }),
          (n.wbg.__wbg_done_1ebec03bbd919843 = function (e) {
            return c(e).done;
          }),
          (n.wbg.__wbg_value_6ac8da5cc5b3efda = function (e) {
            return o(c(e).value);
          }),
          (n.wbg.__wbg_get_baf4855f9a986186 = function () {
            return R(function (e, n) {
              return o(Reflect.get(c(e), c(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_call_95d1ea488d03e4e8 = function () {
            return R(function (e, n) {
              return o(c(e).call(c(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_new_f9876326328f45ed = function () {
            return o(new Object());
          }),
          (n.wbg.__wbg_self_e7c1f827057f6584 = function () {
            return R(function () {
              return o(self.self);
            }, arguments);
          }),
          (n.wbg.__wbg_window_a09ec664e14b1b81 = function () {
            return R(function () {
              return o(window.window);
            }, arguments);
          }),
          (n.wbg.__wbg_globalThis_87cbb8506fecf3a9 = function () {
            return R(function () {
              return o(globalThis.globalThis);
            }, arguments);
          }),
          (n.wbg.__wbg_global_c85a9259e621f3db = function () {
            return R(function () {
              return o(_.g.global);
            }, arguments);
          }),
          (n.wbg.__wbg_set_17224bc548dd1d7b = function (e, n, _) {
            c(e)[n >>> 0] = u(_);
          }),
          (n.wbg.__wbg_isArray_39d28997bf6b96b4 = function (e) {
            return Array.isArray(c(e));
          }),
          (n.wbg.__wbg_of_892d7838f8e4cc20 = function (e) {
            return o(Array.of(c(e)));
          }),
          (n.wbg.__wbg_of_defbc28e6c20f48f = function (e, n) {
            return o(Array.of(c(e), c(n)));
          }),
          (n.wbg.__wbg_push_49c286f04dd3bf59 = function (e, n) {
            return c(e).push(c(n));
          }),
          (n.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065 = function (e) {
            let n;
            try {
              n = c(e) instanceof ArrayBuffer;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_new_14e50b92ffe713d6 = function (e) {
            return o(new ArrayBuffer(e >>> 0));
          }),
          (n.wbg.__wbg_values_97683218f24ed826 = function (e) {
            return o(c(e).values());
          }),
          (n.wbg.__wbg_new_15d3966e9981a196 = function (e, n) {
            return o(new Error(d(e, n)));
          }),
          (n.wbg.__wbg_apply_aedce30790c00792 = function () {
            return R(function (e, n, _) {
              return o(c(e).apply(c(n), c(_)));
            }, arguments);
          }),
          (n.wbg.__wbg_call_9495de66fdbe016b = function () {
            return R(function (e, n, _) {
              return o(c(e).call(c(n), c(_)));
            }, arguments);
          }),
          (n.wbg.__wbg_isSafeInteger_8c4789029e885159 = function (e) {
            return Number.isSafeInteger(c(e));
          }),
          (n.wbg.__wbg_getTime_7c59072d1651a3cf = function (e) {
            return c(e).getTime();
          }),
          (n.wbg.__wbg_getTimezoneOffset_2a6b27fb18493a56 = function (e) {
            return c(e).getTimezoneOffset();
          }),
          (n.wbg.__wbg_new0_25059e40b1c02766 = function () {
            return o(new Date());
          }),
          (n.wbg.__wbg_instanceof_Object_f5a826c4da0d4a94 = function (e) {
            let n;
            try {
              n = c(e) instanceof Object;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_entries_4e1315b774245952 = function (e) {
            return o(Object.entries(c(e)));
          }),
          (n.wbg.__wbg_fromEntries_47a432d7604fc06a = function () {
            return R(function (e) {
              return o(Object.fromEntries(c(e)));
            }, arguments);
          }),
          (n.wbg.__wbg_is_8f1618fe9a4fd388 = function (e, n) {
            return Object.is(c(e), c(n));
          }),
          (n.wbg.__wbg_new_9d3a9ce4282a18a8 = function (e, n) {
            try {
              var _ = { a: e, b: n };
              const t = new Promise((e, n) => {
                const t = _.a;
                _.a = 0;
                try {
                  return (function (e, n, _, t) {
                    b.wasm_bindgen__convert__closures__invoke2_mut__h2eff38e05f4f2144(
                      e,
                      n,
                      o(_),
                      o(t)
                    );
                  })(t, _.b, e, n);
                } finally {
                  _.a = t;
                }
              });
              return o(t);
            } finally {
              _.a = _.b = 0;
            }
          }),
          (n.wbg.__wbg_resolve_fd40f858d9db1a04 = function (e) {
            return o(Promise.resolve(c(e)));
          }),
          (n.wbg.__wbg_then_ec5db6d509eb475f = function (e, n) {
            return o(c(e).then(c(n)));
          }),
          (n.wbg.__wbg_then_f753623316e2873a = function (e, n, _) {
            return o(c(e).then(c(n), c(_)));
          }),
          (n.wbg.__wbg_buffer_cf65c07de34b9a08 = function (e) {
            return o(c(e).buffer);
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74 = function (
            e,
            n,
            _
          ) {
            return o(new Int8Array(c(e), n >>> 0, _ >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_f477e654086cbbb6 = function (
            e,
            n,
            _
          ) {
            return o(new Int16Array(c(e), n >>> 0, _ >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_b57a602974d4b1cd = function (
            e,
            n,
            _
          ) {
            return o(new Int32Array(c(e), n >>> 0, _ >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5 = function (
            e,
            n,
            _
          ) {
            return o(new Uint8Array(c(e), n >>> 0, _ >>> 0));
          }),
          (n.wbg.__wbg_new_537b7341ce90bb31 = function (e) {
            return o(new Uint8Array(c(e)));
          }),
          (n.wbg.__wbg_set_17499e8aa4003ebd = function (e, n, _) {
            c(e).set(c(n), _ >>> 0);
          }),
          (n.wbg.__wbg_length_27a2afe8ab42b09f = function (e) {
            return c(e).length;
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_9241d9d251418ebf = function (
            e,
            n,
            _
          ) {
            return o(new Uint16Array(c(e), n >>> 0, _ >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee = function (
            e,
            n,
            _
          ) {
            return o(new Uint32Array(c(e), n >>> 0, _ >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_4078d56428eb2926 = function (
            e,
            n,
            _
          ) {
            return o(new Float32Array(c(e), n >>> 0, _ >>> 0));
          }),
          (n.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca = function (e) {
            let n;
            try {
              n = c(e) instanceof Uint8Array;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_newwithlength_b56c882b57805732 = function (e) {
            return o(new Uint8Array(e >>> 0));
          }),
          (n.wbg.__wbg_fill_9a34644ce9e78c5b = function (e, n, _, t) {
            return o(c(e).fill(n, _ >>> 0, t >>> 0));
          }),
          (n.wbg.__wbg_subarray_7526649b91a252a6 = function (e, n, _) {
            return o(c(e).subarray(n >>> 0, _ >>> 0));
          }),
          (n.wbg.__wbg_ownKeys_9efe69be404540aa = function () {
            return R(function (e) {
              return o(Reflect.ownKeys(c(e)));
            }, arguments);
          }),
          (n.wbg.__wbg_set_6aa458a4ebdb65cb = function () {
            return R(function (e, n, _) {
              return Reflect.set(c(e), c(n), c(_));
            }, arguments);
          }),
          (n.wbg.__wbindgen_bigint_get_as_i64 = function (e, n) {
            const _ = c(n),
              t = "bigint" == typeof _ ? _ : void 0;
            (((null !== A && 0 !== A.byteLength) ||
              (A = new BigInt64Array(b.memory.buffer)),
            A)[e / 8 + 1] = l(t) ? BigInt(0) : t),
              (y()[e / 4 + 0] = !l(t));
          }),
          (n.wbg.__wbindgen_debug_string = function (e, n) {
            const _ = v(I(c(n)), b.__wbindgen_malloc, b.__wbindgen_realloc),
              t = h;
            (y()[e / 4 + 1] = t), (y()[e / 4 + 0] = _);
          }),
          (n.wbg.__wbindgen_throw = function (e, n) {
            throw new Error(d(e, n));
          }),
          (n.wbg.__wbindgen_memory = function () {
            return o(b.memory);
          }),
          (n.wbg.__wbindgen_closure_wrapper952 = function (e, n, _) {
            return o(D(e, n, 280, P));
          }),
          (n.wbg.__wbindgen_closure_wrapper953 = function (e, n, _) {
            return o(D(e, n, 280, P));
          }),
          (n.wbg.__wbindgen_closure_wrapper954 = function (e, n, _) {
            return o(D(e, n, 280, T));
          }),
          (n.wbg.__wbindgen_closure_wrapper955 = function (e, n, _) {
            return o(D(e, n, 280, P));
          }),
          (n.wbg.__wbindgen_closure_wrapper956 = function (e, n, _) {
            return o(D(e, n, 280, F));
          }),
          (n.wbg.__wbindgen_closure_wrapper957 = function (e, n, _) {
            return o(D(e, n, 280, P));
          }),
          (n.wbg.__wbindgen_closure_wrapper13285 = function (e, n, _) {
            return o(D(e, n, 5212, E));
          }),
          n
        );
      }
      function q(e, n) {
        return (
          (b = e.exports),
          (G.__wbindgen_wasm_module = n),
          (A = null),
          (B = null),
          (s = null),
          (p = null),
          (k = null),
          (g = null),
          (W = null),
          b
        );
      }
      function j(e) {
        const n = V();
        return (
          e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)),
          q(new WebAssembly.Instance(e, n), e)
        );
      }
      async function G(e) {
        void 0 === e && (e = new URL(_(878), _.b));
        const n = V();
        ("string" == typeof e ||
          ("function" == typeof Request && e instanceof Request) ||
          ("function" == typeof URL && e instanceof URL)) &&
          (e = fetch(e));
        const { instance: t, module: r } = await (async function (e, n) {
          if ("function" == typeof Response && e instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming)
              try {
                return await WebAssembly.instantiateStreaming(e, n);
              } catch (n) {
                if ("application/wasm" == e.headers.get("Content-Type"))
                  throw n;
                console.warn(
                  "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                  n
                );
              }
            const _ = await e.arrayBuffer();
            return await WebAssembly.instantiate(_, n);
          }
          {
            const _ = await WebAssembly.instantiate(e, n);
            return _ instanceof WebAssembly.Instance
              ? { instance: _, module: e }
              : _;
          }
        })(await e, n);
        return q(t, r);
      }
      const N = G;
    },
  },
]);
//# sourceMappingURL=core.ruffle.42fa0f5e9c08d6ea86d4.js.map